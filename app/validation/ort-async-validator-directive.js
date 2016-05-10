var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var OrtAsyncValidator_1 = require("./OrtAsyncValidator");
var core_1 = require("angular2/core");
var common_1 = require("angular2/common");
var core_2 = require("angular2/core");
/**
 * Created by steyer on 03.05.2016.
 */
var OrtAsyncValidatorDirective = (function () {
    function OrtAsyncValidatorDirective() {
    }
    OrtAsyncValidatorDirective.prototype.validate = function (c) {
        return OrtAsyncValidator_1.OrtAsyncValidator.validateAsync(c);
    };
    OrtAsyncValidatorDirective = __decorate([
        core_1.Directive({
            selector: "input[ortAsync]",
            providers: [core_2.provide(common_1.NG_ASYNC_VALIDATORS, { useExisting: OrtAsyncValidatorDirective, multi: true })]
        }), 
        __metadata('design:paramtypes', [])
    ], OrtAsyncValidatorDirective);
    return OrtAsyncValidatorDirective;
})();
exports.OrtAsyncValidatorDirective = OrtAsyncValidatorDirective;
//# sourceMappingURL=ort-async-validator-directive.js.map