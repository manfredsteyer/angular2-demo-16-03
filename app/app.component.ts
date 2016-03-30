//import {Component} from 'angular2/core';
import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {Home} from "./home/home";
import {FlugSuchen} from "./flug-suchen/flug-suchen.component";
import {PassagierSuchen} from "./passagier-suchen/passagier-suchen";
import {FlugEdit} from "./flug-edit/flug-edit";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES] // router-outlet, routerLink
})
@RouteConfig([
    { path: '/home', component: Home, name: 'Home', useAsDefault: true },
    { path: '/flug-suchen', component: FlugSuchen, name: 'FlugSuchen'},
    { path: '/passagier-suchen', component: PassagierSuchen, name: 'PassagierSuchen' },
    { path: '/flug-edit/:id', component: FlugEdit, name: 'FlugEdit'}
])
export class AppComponent {

}
