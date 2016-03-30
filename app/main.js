System.register(['angular2/platform/browser', './app.component', 'rxjs/add/operator/map', "angular2/http", "angular2/core", "angular2/router", "./flug-card/flug-card"], function(exports_1) {
    var browser_1, app_component_1, http_1, core_1, router_1, core_2, flug_card_1, router_2, router_3;
    var services;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (_1) {},
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
                router_3 = router_1_1;
            },
            function (flug_card_1_1) {
                flug_card_1 = flug_card_1_1;
            }],
        execute: function() {
            services = [
                // provide(PLATFORM_PIPES, {useValue: OrtPipe, multi: true}),
                http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                core_1.provide('BASE_URL', { useValue: 'http://www.angular.at/api' }),
                //provide(APP_BASE_HREF, {useValue: '/angular2-steyer/'}),
                core_1.provide(core_2.PLATFORM_DIRECTIVES, { useValue: flug_card_1.FlugCard, multi: true }),
                core_1.provide(router_2.LocationStrategy, { useClass: router_3.HashLocationStrategy })
            ];
            browser_1.bootstrap(app_component_1.AppComponent, services);
        }
    }
});
//# sourceMappingURL=main.js.map