import {Component } from 'angular2/core';
import {Flug} from "../models/flug";
import {Http, URLSearchParams} from "angular2/http";

declare var fetch: any;

@Component({
    selector: 'flug-suchen',
    templateUrl: 'app/flug-suchen/flug-suchen.component.html'
})
export class FlugSuchen {

    public von: string = 'Graz';
    public nach: string = 'Hamburg';

    public fluege: Array<Flug> = [];
    public selectedFlug: Flug;

    constructor(private http: Http) {

    }

    public suchen() {

        var search = new URLSearchParams();
        search.set('abflugort', this.von);
        search.set('zielort', this.nach);

        var url = "http://www.angular.at/api/flug";
        this
            .http
            .get(url, { search })
            .map(response => response.json())
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