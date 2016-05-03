System.register(["angular2/router", "../services/flug.service", "angular2/core", "../validation/ort-validator.directive", "../validation/ort-async-validator-directive", "../validation/date-value-accessor", "../date-component/date-component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var router_1, flug_service_1, core_1, ort_validator_directive_1, ort_async_validator_directive_1, date_value_accessor_1, date_component_1;
    var FlugEdit;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (flug_service_1_1) {
                flug_service_1 = flug_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ort_validator_directive_1_1) {
                ort_validator_directive_1 = ort_validator_directive_1_1;
            },
            function (ort_async_validator_directive_1_1) {
                ort_async_validator_directive_1 = ort_async_validator_directive_1_1;
            },
            function (date_value_accessor_1_1) {
                date_value_accessor_1 = date_value_accessor_1_1;
            },
            function (date_component_1_1) {
                date_component_1 = date_component_1_1;
            }],
        execute: function() {
            FlugEdit = (function () {
                function FlugEdit(flugService, params) {
                    var _this = this;
                    this.flugService = flugService;
                    this.flug = {};
                    this.info = "Flug Detail";
                    var id = params.get('id');
                    this.id = id;
                    flugService.findById(id).subscribe(function (flug) {
                        _this.flug = flug;
                        _this.error = "";
                    }, function (err) {
                        console.error(err);
                        _this.error = "Fehler beim Laden!";
                    });
                }
                FlugEdit.prototype.save = function () {
                    var _this = this;
                    this.flugService.save(this.flug).subscribe(function (message) {
                        //this.message = message;
                        _this.error = "";
                        _this.message = "Flug wurde gespeichert!";
                    }, function (err) {
                        console.error(err);
                        _this.error = err.text();
                    });
                };
                FlugEdit = __decorate([
                    core_1.Component({
                        templateUrl: '/angular2-steyer/app/flug-edit/flug-edit.html',
                        directives: [
                            ort_validator_directive_1.OrtValidatorDirective,
                            ort_async_validator_directive_1.OrtAsyncValidatorDirective,
                            date_value_accessor_1.DateValueAccessor,
                            date_component_1.DateComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [flug_service_1.FlugService, router_1.RouteParams])
                ], FlugEdit);
                return FlugEdit;
            })();
            exports_1("FlugEdit", FlugEdit);
        }
    }
});
//# sourceMappingURL=flug-edit.js.map