var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var common_1 = require('angular2/common');
var core_2 = require("angular2/core");
// <label>{{myLabel}}</label>
// <div [feld]="myLabel">
// <input [(ngModel)]="..."
var DateValueAccessor = (function (_super) {
    __extends(DateValueAccessor, _super);
    function DateValueAccessor(_renderer, _elementRef) {
        _super.call(this, _renderer, _elementRef);
        this.lastInput = "";
    }
    DateValueAccessor.prototype.blur = function () {
        //this.onChange(this.lastInput);
        this.onTouched();
    };
    DateValueAccessor.prototype.input = function (viewValue) {
        console.debug("Format: " + this.format);
        // Write back to model   
        if (viewValue) {
            var reg;
            if (this.format == "en") {
                reg = /\//;
            }
            else {
                reg = /\./;
            }
            viewValue = viewValue.split(reg);
            viewValue = viewValue[2] + "-" + viewValue[1] + "-" + viewValue[0];
        }
        this.onChange(viewValue);
        //this.lastInput = viewValue;
    };
    DateValueAccessor.prototype.writeValue = function (modelValue) {
        console.debug("Format: " + this.format);
        var delim = "";
        if (this.format == "en") {
            delim = "/";
        }
        else {
            delim = ".";
        }
        // Write to view
        if (modelValue) {
            var date = new Date(modelValue);
            modelValue = date.getDate() + delim + (date.getMonth() + 1) + delim + date.getFullYear();
        }
        _super.prototype.writeValue.call(this, modelValue);
    };
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], DateValueAccessor.prototype, "format", void 0);
    DateValueAccessor = __decorate([
        core_1.Directive({
            selector: //<input type="date" format="de">
            'input[date]',
            host: { '(input)': 'input($event.target.value)', '(blur)': 'blur()' },
            providers: [core_1.provide(common_1.NG_VALUE_ACCESSOR, { useExisting: DateValueAccessor, multi: true })]
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
    ], DateValueAccessor);
    return DateValueAccessor;
})(common_1.DefaultValueAccessor);
exports.DateValueAccessor = DateValueAccessor;
//# sourceMappingURL=date-value-accessor.js.map