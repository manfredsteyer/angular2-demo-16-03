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
import { OAuthService } from 'angular2-oauth2/oauth-service';




@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES, Warenkorb], // router-outlet, routerLink
    providers: [FlugEventService, OAuthService]
    //providers: [provide(FlugEventService, {useClass: FlugEventService})]
})
@RouteConfig([
    { path: '/home', component: Home, name: 'Home', useAsDefault: true },
    { path: '/flug-buchen/...', component: FlugBuchen, name: 'FlugBuchen'}
])
export class AppComponent {

    constructor(private oauthService: OAuthService) {

        this.oauthService.loginUrl = "https://steyer-identity-server.azurewebsites.net/identity/connect/authorize"; //Id-Provider?
        this.oauthService.redirectUri = window.location.origin + "/index.html";
        this.oauthService.clientId = "spa-demo";
        this.oauthService.scope = "openid profile email voucher";
        this.oauthService.issuer = "https://steyer-identity-server.azurewebsites.net/identity";
        this.oauthService.oidc = true;

        this.oauthService.tryLogin({}); // <-- Parsen der Tokens aus der URL


    }

}

