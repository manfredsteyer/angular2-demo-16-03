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
var OrtValidator_1 = require("./OrtValidator");
var common_1 = require("angular2/common");
var core_2 = require("angular2/core");
/**
 * Created by steyer on 03.05.2016.
 */
var OrtValidatorDirective = (function () {
    function OrtValidatorDirective() {
    }
    OrtValidatorDirective.prototype.validate = function (c) {
        return OrtValidator_1.OrtValidator.validate(c);
    };
    OrtValidatorDirective = __decorate([
        core_1.Directive({
            selector: 'input[ort]',
            // xy --> <xy></xy>
            // .xy --> <div class="xy"></div>
            // #xy --> <div id="xy"></div>
            // [xy] --> <div xy></div>
            providers: [core_2.provide(common_1.NG_VALIDATORS, { useExisting: OrtValidatorDirective, multi: true })]
        }), 
        __metadata('design:paramtypes', [])
    ], OrtValidatorDirective);
    return OrtValidatorDirective;
})();
exports.OrtValidatorDirective = OrtValidatorDirective;
//# sourceMappingURL=ort-validator.directive.js.map