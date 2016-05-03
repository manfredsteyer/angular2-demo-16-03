System.register(["angular2/core", "./OrtValidator", "angular2/common"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, OrtValidator_1, common_1, core_2;
    var OrtValidatorDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (OrtValidator_1_1) {
                OrtValidator_1 = OrtValidator_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            /**
             * Created by steyer on 03.05.2016.
             */
            OrtValidatorDirective = (function () {
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
            exports_1("OrtValidatorDirective", OrtValidatorDirective);
        }
    }
});
//# sourceMappingURL=ort-validator.directive.js.map