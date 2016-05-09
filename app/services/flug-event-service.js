/**
 * Created by steyer on 09.05.2016.
 */
System.register(['rxjs/subject/ReplaySubject'], function(exports_1) {
    var ReplaySubject_1;
    var FlugEventService;
    return {
        setters:[
            function (ReplaySubject_1_1) {
                ReplaySubject_1 = ReplaySubject_1_1;
            }],
        execute: function() {
            FlugEventService = (function () {
                function FlugEventService() {
                    this.selectedFlug$ = new ReplaySubject_1.ReplaySubject(1);
                }
                return FlugEventService;
            })();
            exports_1("FlugEventService", FlugEventService);
        }
    }
});
//# sourceMappingURL=flug-event-service.js.map