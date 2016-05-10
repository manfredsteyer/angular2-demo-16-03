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
var flug_service_1 = require("../services/flug.service");
var app_services_1 = require("../services/app-services");
var ort_pipe_1 = require("../pipes/ort.pipe");
var router_1 = require("angular2/router");
var common_1 = require("angular2/common");
var common_2 = require("angular2/common");
var OrtValidator_1 = require("../validation/OrtValidator");
var OrtAsyncValidator_1 = require("../validation/OrtAsyncValidator");
var NotEqualValidator_1 = require("../validation/NotEqualValidator");
var flug_event_service_1 = require("../services/flug-event-service");
var core_2 = require("angular2/core");
var router_2 = require("angular2/router");
var home_1 = require("../home/home");
var oauth_service_1 = require("angular2-oauth2/oauth-service");
function Auth() {
    return router_2.CanActivate(function (next, prev) {
        var oauthService = new oauth_service_1.OAuthService();
        if (!oauthService.hasValidAccessToken()) {
            next.componentType = home_1.Home;
            next.urlParams = ["login=" + next.urlPath];
            next.terminal = true;
        }
        return true;
    });
}
var FlugSuchen = (function () {
    function FlugSuchen(flugEventService, flugService, fb) {
        this.flugEventService = flugEventService;
        this.flugService = flugService;
        this.fb = fb;
        this.flugEventService.selectedFlug$.subscribe(function (flug) { return console.debug(flug); });
        this.formDesc = [
            { label: 'Abflugort', fieldName: 'von' },
            { label: 'Zielort', fieldName: 'nach', control: null },
        ];
        this.filter = fb.group({
            von: [
                'Graz',
                common_2.Validators.compose([
                    common_2.Validators.required,
                    common_2.Validators.minLength(3),
                    common_2.Validators.maxLength(30),
                    OrtValidator_1.OrtValidator.validate
                ]),
                common_2.Validators.composeAsync([
                    OrtAsyncValidator_1.OrtAsyncValidator.validateAsync
                ])
            ],
            nach: ['Hamburg', common_2.Validators.required]
        });
        this.filter.validator = NotEqualValidator_1.NotEqualValidator.validate('von', 'nach');
        // this.filter.validator = validateAlternative;
        // this.filter.controls.von.valid
        // this.filter.controls.von.subscribe
        this.filter.valueChanges.subscribe(function () {
            console.debug("Änderung im Formular");
        });
    }
    FlugSuchen.prototype.delay = function () {
        /*
        var datum = new Date(this.fluege[0].datum);
        datum.setMinutes(datum.getMinutes() + 15);
        var oldFlug = this.fluege[0];

        // Neuen Flug einrichten, weil alter Flug "immutable" ist!
        this.fluege[0] = {
            abflugort: oldFlug.abflugort,
            zielort: oldFlug.zielort,
            id: oldFlug.id,
            datum: datum.toISOString()
        };
        */
    };
    Object.defineProperty(FlugSuchen.prototype, "fluege$", {
        // public fluege: Array<Flug> = [];
        get: function () {
            return this.flugService.fluege$;
        },
        enumerable: true,
        configurable: true
    });
    FlugSuchen.prototype.suchen = function () {
        var von = this.filter.value.von;
        var nach = this.filter.value.nach;
        return this.flugService.find(von, nach);
    };
    FlugSuchen.prototype.select = function (flug) {
        this.selectedFlug = flug;
        this.flugEventService.selectedFlug$.next(flug);
    };
    FlugSuchen = __decorate([
        core_1.Component({
            selector: 'flug-suchen',
            //templateUrl: 'app/flug-suchen/flug-suchen.component.html',
            template: require("./flug-suchen.component.html"),
            providers: [app_services_1.APP_SERVICES],
            directives: [router_1.ROUTER_DIRECTIVES,],
            pipes: [ort_pipe_1.OrtPipe],
            changeDetection: core_2.ChangeDetectionStrategy.OnPush
        }),
        Auth(), 
        __metadata('design:paramtypes', [flug_event_service_1.FlugEventService, flug_service_1.FlugService, common_1.FormBuilder])
    ], FlugSuchen);
    return FlugSuchen;
})();
exports.FlugSuchen = FlugSuchen;
//# sourceMappingURL=flug-suchen.component.js.map