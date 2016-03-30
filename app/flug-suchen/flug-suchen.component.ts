import {Component } from 'angular2/core';
import {Flug} from "../models/flug";
import {Http, URLSearchParams, Headers} from "angular2/http";
import {FlugService} from "../services/flug.service";
import {provide} from "angular2/core";
import {APP_SERVICES} from "../services/app-services";
import {OrtPipe} from "../pipes/ort.pipe";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {FlugCard} from "../flug-card/flug-card";

declare var fetch: any;


@Component({
    selector: 'flug-suchen',
    templateUrl: '/angular2-steyer/app/flug-suchen/flug-suchen.component.html',
    providers: [APP_SERVICES],
    directives: [ROUTER_DIRECTIVES, /*FlugCard*/],
    pipes: [OrtPipe]
})
export class FlugSuchen {

    public von: string = 'Graz';
    public nach: string = 'Hamburg';

    public fluege: Array<Flug> = [];
    public selectedFlug: Flug;

    constructor(private flugService: FlugService) {
    }

    public suchen() {

        this.flugService
            .find(this.von, this.nach)
            .subscribe( // <-- Observable, RxJS
                (fluege: Array<Flug>) => {
                    this.fluege = fluege;
                },
                (err) => {
                    console.error('Fehler beim Laden von Flügen!');
                    console.error(err);
                }
            );

/*
            .then((fluege: Array<Flug>) => {
                this.fluege = fluege;
            })
            .catch((err) => {
                console.error('Fehler beim Laden von Flügen!');
                console.error(err);
            });
*/
    }

    public select(flug: Flug) {
        this.selectedFlug = flug;
    }

}