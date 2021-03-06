var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var core_2 = require("angular2/core");
var core_3 = require("angular2/core");
var core_4 = require("angular2/core");
var core_5 = require("angular2/core");
var FlugCard = (function () {
    function FlugCard() {
        this.selectedItemChange = new core_2.EventEmitter();
    }
    FlugCard.prototype.select = function () {
        this.selectedItemChange.emit(this.flug); // $event
    };
    __decorate([
        core_3.Input('item'), 
        __metadata('design:type', Object)
    ], FlugCard.prototype, "flug", void 0);
    __decorate([
        core_3.Input(), 
        __metadata('design:type', Object)
    ], FlugCard.prototype, "selectedItem", void 0);
    __decorate([
        core_4.Output(), 
        __metadata('design:type', Object)
    ], FlugCard.prototype, "selectedItemChange", void 0);
    FlugCard = __decorate([
        core_1.Component({
            selector: 'flug-card',
            templateUrl: 'app/flug-card/flug-card.html',
            changeDetection: core_5.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], FlugCard);
    return FlugCard;
})();
exports.FlugCard = FlugCard;
//# sourceMappingURL=flug-card.js.map