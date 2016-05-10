var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import {Component} from 'angular2/core';
var core_1 = require("angular2/core");
var router_1 = require("angular2/router");
var router_2 = require("angular2/router");
var home_1 = require("./home/home");
var flug_buchen_1 = require("./flug-buchen/flug-buchen");
var flug_event_service_1 = require('./services/flug-event-service');
var warnkorb_1 = require("./warenkorb/warnkorb");
var oauth_service_1 = require('angular2-oauth2/oauth-service');
var AppComponent = (function () {
    function AppComponent(oauthService) {
        this.oauthService = oauthService;
        this.oauthService.loginUrl = "https://steyer-identity-server.azurewebsites.net/identity/connect/authorize"; //Id-Provider?
        this.oauthService.redirectUri = window.location.origin + "/index.html";
        this.oauthService.clientId = "spa-demo";
        this.oauthService.scope = "openid profile email voucher";
        this.oauthService.issuer = "https://steyer-identity-server.azurewebsites.net/identity";
        this.oauthService.oidc = true;
        this.oauthService.tryLogin({}); // <-- Parsen der Tokens aus der URL
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, warnkorb_1.Warenkorb],
            providers: [flug_event_service_1.FlugEventService, oauth_service_1.OAuthService]
        }),
        router_2.RouteConfig([
            { path: '/home', component: home_1.Home, name: 'Home', useAsDefault: true },
            { path: '/flug-buchen/...', component: flug_buchen_1.FlugBuchen, name: 'FlugBuchen' }
        ]), 
        __metadata('design:paramtypes', [oauth_service_1.OAuthService])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map