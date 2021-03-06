import {Component } from 'angular2/core';
import {Flug} from "../models/flug";
import {Http, URLSearchParams, Headers} from "angular2/http";
import {FlugService} from "../services/flug.service";
import {provide} from "angular2/core";
import {APP_SERVICES} from "../services/app-services";
import {OrtPipe} from "../pipes/ort.pipe";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {FlugCard} from "../flug-card/flug-card";
import {ControlGroup} from "angular2/common";
import {FormBuilder} from "angular2/common";
import {Validators} from "angular2/common";
import {OrtValidator} from "../validation/OrtValidator";
import {OrtAsyncValidator} from "../validation/OrtAsyncValidator";
import {NotEqualValidator, validateAlternative} from "../validation/NotEqualValidator";
import {FlugEventService} from "../services/flug-event-service";
import {Subject} from "rxjs/Subject";
import {ChangeDetectionStrategy} from "angular2/core";
import {CanActivate} from "angular2/router";
import {Home} from "../home/home";
import {OAuthService} from "angular2-oauth2/oauth-service";

declare var fetch: any;
declare var require: any;

function Auth() {
    return CanActivate((next, prev) => {
        var oauthService = new OAuthService();

        if (!oauthService.hasValidAccessToken()) {
            next.componentType = Home;
            next.urlParams = ["login=" + next.urlPath];
            next.terminal = true;
        }

        return true;
    });
}

@Component({
    selector: 'flug-suchen',
    //templateUrl: 'app/flug-suchen/flug-suchen.component.html',
    template: require("./flug-suchen.component.html"),
    providers: [APP_SERVICES],
    directives: [ROUTER_DIRECTIVES, /*FlugCard*/],
    pipes: [OrtPipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
/*
@CanActivate((next, prev) => {
    var oauthService = new OAuthService();

    if (!oauthService.hasValidAccessToken()) {
        next.componentType = Home;
        next.urlParams = ["login=" + next.urlPath];
        next.terminal = true;
    }

    return true;
})
*/
@Auth()
export class FlugSuchen {

    // public von: string = 'Graz';
    // public nach: string = 'Hamburg';

    public filter: ControlGroup;

    public selectedFlug: Flug;
    public formDesc;

    constructor(
        private flugEventService: FlugEventService,
        private flugService: FlugService,
        private fb: FormBuilder) {

        this.flugEventService.selectedFlug$.subscribe(
            (flug) => console.debug(<any>flug)
        )

        this.formDesc = [
            { label: 'Abflugort', fieldName: 'von' },
            { label: 'Zielort', fieldName: 'nach', control: null },
        ];

        this.filter = fb.group({
            von: [
                    'Graz',
                    Validators.compose([
                        Validators.required, // c --> { required: true }
                        Validators.minLength(3),
                        Validators.maxLength(30),
                        OrtValidator.validate
                    ]),
                    Validators.composeAsync([
                        OrtAsyncValidator.validateAsync
                    ])
                ],
            nach: ['Hamburg', Validators.required]
        });

        this.filter.validator = NotEqualValidator.validate('von', 'nach');
        // this.filter.validator = validateAlternative;

        // this.filter.controls.von.valid
        // this.filter.controls.von.subscribe
        this.filter.valueChanges.subscribe(
            () => {
                console.debug("Änderung im Formular")
            }
        )



    }

    public delay() {
        /*
        var datum = new Date(this.fluege[0].datum);
        datum.setMinutes(datum.getMinutes() + 15);
        var oldFlug = this.fluege[0];

        // Neuen Flug einrichten, weil alter Flug "immutable" ist!
        this.fluege[0] = {
            abflugort: oldFlug.abflugort,
            zielort: oldFlug.zielort,
            id: oldFlug.id,
            datum: datum.toISOString()
        };
        */
    }

    // public fluege: Array<Flug> = [];

    public get fluege$(): Subject<Flug[]> {
        return this.flugService.fluege$;
    }

    public suchen() {

        var von = this.filter.value.von;
        var nach = this.filter.value.nach;

        return this.flugService.find(von, nach);

    }

    public select(flug: Flug) {
        this.selectedFlug = flug;
        this.flugEventService.selectedFlug$.next(flug);
    }

}