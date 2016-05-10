var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var flug_event_service_1 = require('../services/flug-event-service');
var Warenkorb = (function () {
    function Warenkorb(flugEventService) {
        var _this = this;
        this.fluege = [];
        this.flugEventService = flugEventService;
        flugEventService.selectedFlug$.subscribe(function (flug) {
            if (_this.fluege.length >= 3) {
                _this.fluege.splice(0, 1);
            }
            _this.fluege.push(flug);
        });
    }
    Warenkorb.prototype.remove = function (f) {
        var idx = this.fluege.findIndex(function (flug) { return flug == f; });
        this.fluege.splice(idx, 1);
    };
    Warenkorb = __decorate([
        core_1.Component({
            selector: 'warenkorb',
            templateUrl: 'app/warenkorb/warenkorb.html'
        }), 
        __metadata('design:paramtypes', [flug_event_service_1.FlugEventService])
    ], Warenkorb);
    return Warenkorb;
})();
exports.Warenkorb = Warenkorb;
//# sourceMappingURL=warnkorb.js.map