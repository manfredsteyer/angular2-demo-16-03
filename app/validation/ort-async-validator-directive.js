System.register(["./OrtAsyncValidator", "angular2/core", "angular2/common"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var OrtAsyncValidator_1, core_1, common_1, core_2;
    var OrtAsyncValidatorDirective;
    return {
        setters:[
            function (OrtAsyncValidator_1_1) {
                OrtAsyncValidator_1 = OrtAsyncValidator_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            /**
             * Created by steyer on 03.05.2016.
             */
            OrtAsyncValidatorDirective = (function () {
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
            exports_1("OrtAsyncValidatorDirective", OrtAsyncValidatorDirective);
        }
    }
});
//# sourceMappingURL=ort-async-validator-directive.js.map