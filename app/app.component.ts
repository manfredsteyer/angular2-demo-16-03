//import {Component} from 'angular2/core';
import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {Home} from "./home/home";
import {FlugSuchen} from "./flug-suchen/flug-suchen.component";
import {PassagierSuchen} from "./passagier-suchen/passagier-suchen";
import {FlugEdit} from "./flug-edit/flug-edit";
import {FlugBuchen} from "./flug-buchen/flug-buchen";

import {FlugEventService} from './services/flug-event-service';
import {provide} from "angular2/core";
import {Warenkorb} from "./warenkorb/warnkorb";



@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES, Warenkorb], // router-outlet, routerLink
    providers: [FlugEventService]
    //providers: [provide(FlugEventService, {useClass: FlugEventService})]
})
@RouteConfig([
    { path: '/home', component: Home, name: 'Home', useAsDefault: true },
    { path: '/flug-buchen/...', component: FlugBuchen, name: 'FlugBuchen'}
])
export class AppComponent {

}
