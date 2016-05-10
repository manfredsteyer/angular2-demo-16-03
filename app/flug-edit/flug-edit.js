var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require("angular2/router");
var flug_service_1 = require("../services/flug.service");
var core_1 = require("angular2/core");
var ort_validator_directive_1 = require("../validation/ort-validator.directive");
var ort_async_validator_directive_1 = require("../validation/ort-async-validator-directive");
var date_value_accessor_1 = require("../validation/date-value-accessor");
var date_component_1 = require("../date-component/date-component");
var router_2 = require('angular2/router');
var FlugEdit = (function () {
    function FlugEdit(flugService, params) {
        var _this = this;
        this.flugService = flugService;
        this.flug = {};
        this.warnDialog = {
            show: false,
            resolve: null,
            reject: null
        };
        this.dirty = false;
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
    FlugEdit.prototype.formChanged = function () {
        this.dirty = true;
    };
    FlugEdit.prototype.deactive = function (answer) {
        if (answer) {
            this.warnDialog.resolve(true);
        }
        else {
            this.warnDialog.show = false;
            this.warnDialog.resolve(false);
        }
    };
    FlugEdit.prototype.routerCanDeactivate = function (next, prev) {
        var _this = this;
        if (!this.dirty)
            return true;
        return new Promise(function (resolve, reject) {
            _this.warnDialog.show = true;
            _this.warnDialog.reject = reject;
            _this.warnDialog.resolve = resolve;
        });
    };
    FlugEdit.prototype.routerOnActivate = function (next, prev) {
    };
    FlugEdit.prototype.routerOnDeactivate = function (next, prev) {
    };
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
        router_2.CanActivate(function (next, prev) {
            return true;
        }), 
        __metadata('design:paramtypes', [flug_service_1.FlugService, router_1.RouteParams])
    ], FlugEdit);
    return FlugEdit;
})();
exports.FlugEdit = FlugEdit;
//# sourceMappingURL=flug-edit.js.map