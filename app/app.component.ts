//import {Component} from 'angular2/core';
import {Component} from "angular2/core";

@Component({
    selector: 'my-app', // <my-app></my-app>
    templateUrl: 'app/app.component.html',
    // moduleId: module.id // CommonJS
})
export class AppComponent {

    info = "Hallo Welt";

    doStuff() {
        this.info = "Manfred war hier !!! You've beeen haaaaked";
        console.debug("stuff done!");
    }

}
