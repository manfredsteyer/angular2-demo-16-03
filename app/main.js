System.register(['angular2/platform/browser', "./flug-suchen/flug-suchen.component", 'rxjs/add/operator/map', "angular2/http"], function(exports_1) {
    var browser_1, flug_suchen_component_1, http_1;
    var services;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (flug_suchen_component_1_1) {
                flug_suchen_component_1 = flug_suchen_component_1_1;
            },
            function (_1) {},
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            services = [
                http_1.HTTP_PROVIDERS
            ];
            browser_1.bootstrap(flug_suchen_component_1.FlugSuchen, services);
        }
    }
});
//# sourceMappingURL=main.js.map