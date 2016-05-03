
import {RouteParams} from "angular2/router";
import {FlugService} from "../services/flug.service";
import {Component} from "angular2/core";
import {OrtValidatorDirective} from "../validation/ort-validator.directive";
import {OrtAsyncValidatorDirective} from "../validation/ort-async-validator-directive";
import {DateValueAccessor} from "../validation/date-value-accessor";
import {DateComponent} from "../date-component/date-component";

import {CanActivate, CanDeactivate, OnActivate, OnDeactivate} from 'angular2/router';
import {Home} from "../home/home";
import {ComponentInstruction} from "angular2/router";

@Component({
    templateUrl: '/angular2-steyer/app/flug-edit/flug-edit.html',
    directives: [
        OrtValidatorDirective,
        OrtAsyncValidatorDirective,
        DateValueAccessor,
        DateComponent
    ]
})
@CanActivate(function(next, prev) {

    return true;
})
export class FlugEdit
        implements CanDeactivate, OnActivate, OnDeactivate {

    id: string;
    flug = {};
    error;
    message;

    constructor(private flugService: FlugService, params: RouteParams) {
        var id = params.get('id');
        this.id = id;

        flugService.findById(id).subscribe(
            (flug) => {
                this.flug = flug;
                this.error = "";
            },
            (err) => {
                console.error(err);
                this.error = "Fehler beim Laden!";
            }

        )
    }

    warnDialog = {
        show: false,
        resolve: null,
        reject: null
    }

    private dirty = false;

    formChanged() {
        this.dirty = true;
    }

    deactive(answer) {
        if (answer) {
            this.warnDialog.resolve(true);
        }
        else {
            this.warnDialog.show = false;
            this.warnDialog.resolve(false);
        }
    }

    routerCanDeactivate(next, prev): any {

        if (!this.dirty) return true;

        return new Promise((resolve, reject) => {
            this.warnDialog.show = true;
            this.warnDialog.reject = reject;
            this.warnDialog.resolve = resolve;
        });
    }
    routerOnActivate(next, prev) {
    }
    routerOnDeactivate(next, prev) {
    }

    save() {
        this.flugService.save(this.flug).subscribe(

            (message) => {
                //this.message = message;
                this.error = "";
                this.message = "Flug wurde gespeichert!";
            },
            (err) => {
                console.error(err);
                this.error = err.text();
            }
        )
    }

    info = "Flug Detail";

}