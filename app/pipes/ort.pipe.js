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
var OrtPipe = (function () {
    function OrtPipe() {
    }
    OrtPipe.prototype.transform = function (value, args) {
        var fmt = args[0]; // short oder long
        var short, long;
        switch (value) {
            case "Hamburg":
                short = "HAM";
                long = "Hamburg Airport";
                break;
            case "Graz":
                short = "GRZ";
                long = "Flughafen Graz-Thalerhof";
                break;
            default:
                short = long = "ROM";
        }
        if (fmt == 'short')
            return short;
        return long;
    };
    OrtPipe = __decorate([
        core_1.Pipe({
            name: 'ort',
            pure: true
        }), 
        __metadata('design:paramtypes', [])
    ], OrtPipe);
    return OrtPipe;
})();
exports.OrtPipe = OrtPipe;
//# sourceMappingURL=ort.pipe.js.map