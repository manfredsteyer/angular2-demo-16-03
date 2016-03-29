System.register(["./flug.service", "angular2/core"], function(exports_1) {
    var flug_service_1, core_1;
    var APP_SERVICES;
    function doStuff() {
    }
    exports_1("doStuff", doStuff);
    return {
        setters:[
            function (flug_service_1_1) {
                flug_service_1 = flug_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            exports_1("APP_SERVICES", APP_SERVICES = [
                flug_service_1.FlugService,
                core_1.provide('BASE_URL', { useValue: 'http://www.angular.at/api' })
            ]);
        }
    }
});
//# sourceMappingURL=app-services.js.map