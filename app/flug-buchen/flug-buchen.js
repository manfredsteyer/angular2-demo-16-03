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
var router_1 = require("angular2/router");
var flug_suchen_component_1 = require("../flug-suchen/flug-suchen.component");
var passagier_suchen_1 = require("../passagier-suchen/passagier-suchen");
var flug_edit_1 = require("../flug-edit/flug-edit");
var router_2 = require("angular2/router");
var flug_service_1 = require("../services/flug.service");
var FlugBuchen = (function () {
    function FlugBuchen() {
    }
    FlugBuchen = __decorate([
        core_1.Component({
            templateUrl: 'app/flug-buchen/flug-buchen.html',
            directives: [router_2.ROUTER_DIRECTIVES],
            providers: [flug_service_1.FlugService]
        }),
        router_1.RouteConfig([
            { path: 'flug-suchen', component: flug_suchen_component_1.FlugSuchen, name: 'FlugSuchen', useAsDefault: true },
            { path: 'passagier-suchen', component: passagier_suchen_1.PassagierSuchen, name: 'PassagierSuchen' },
            { path: 'flug-edit/:id', component: flug_edit_1.FlugEdit, name: 'FlugEdit' }
        ]), 
        __metadata('design:paramtypes', [])
    ], FlugBuchen);
    return FlugBuchen;
})();
exports.FlugBuchen = FlugBuchen;
//# sourceMappingURL=flug-buchen.js.map