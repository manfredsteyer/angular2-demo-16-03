///<reference path="../node_modules/angular2/src/router/location/location_strategy.d.ts"/>
var browser_1 = require('angular2/platform/browser');
var app_component_1 = require('./app.component');
require('rxjs/add/operator/map');
var http_1 = require("angular2/http");
var core_1 = require("angular2/core");
var router_1 = require("angular2/router");
var core_2 = require("angular2/core");
var flug_card_1 = require("./flug-card/flug-card");
var services;
services = [
    // provide(PLATFORM_PIPES, {useValue: OrtPipe, multi: true}),
    http_1.HTTP_PROVIDERS,
    router_1.ROUTER_PROVIDERS,
    core_1.provide('BASE_URL', { useValue: 'http://www.angular.at/api' }),
    core_1.provide(core_2.PLATFORM_DIRECTIVES, { useValue: flug_card_1.FlugCard, multi: true }),
];
browser_1.bootstrap(app_component_1.AppComponent, services);
console.debug(__filename);
//# sourceMappingURL=main.js.map