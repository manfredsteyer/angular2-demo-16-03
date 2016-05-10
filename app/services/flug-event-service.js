/**
 * Created by steyer on 09.05.2016.
 */
var ReplaySubject_1 = require('rxjs/subject/ReplaySubject');
var FlugEventService = (function () {
    function FlugEventService() {
        this.selectedFlug$ = new ReplaySubject_1.ReplaySubject(1);
    }
    return FlugEventService;
})();
exports.FlugEventService = FlugEventService;
//# sourceMappingURL=flug-event-service.js.map