import {Component} from "angular2/core";
import {RouteParams} from "angular2/router";

@Component({
    templateUrl: 'app/flug-edit/flug-edit.html'
})
export class FlugEdit {

    id: string;

    constructor(params: RouteParams) {
        var id = params.get('id');
        this.id = id;
    }

    info = "Flug Detail";

}