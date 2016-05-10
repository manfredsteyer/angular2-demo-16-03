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
var oauth_service_1 = require("angular2-oauth2/oauth-service");
var Home = (function () {
    function Home(oauthService) {
        this.oauthService = oauthService;
        this.info = "Willkommen!";
    }
    Home.prototype.login = function () {
        this.oauthService.initImplicitFlow();
    };
    Home.prototype.logout = function () {
        this.oauthService.logOut();
    };
    Object.defineProperty(Home.prototype, "name", {
        get: function () {
            var claims = this.oauthService.getIdentityClaims();
            if (!claims)
                return null;
            return claims.given_name;
        },
        enumerable: true,
        configurable: true
    });
    Home = __decorate([
        core_1.Component({
            templateUrl: 'app/home/home.html'
        }), 
        __metadata('design:paramtypes', [oauth_service_1.OAuthService])
    ], Home);
    return Home;
})();
exports.Home = Home;
//# sourceMappingURL=home.js.map