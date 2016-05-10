var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var http_1 = require("angular2/http");
var http_2 = require("angular2/http");
var http_3 = require("angular2/http");
var core_1 = require("angular2/core");
var core_2 = require("angular2/core");
var ReplaySubject_1 = require("rxjs/subject/ReplaySubject");
var oauth_service_1 = require("angular2-oauth2/oauth-service");
var FlugService = (function () {
    function FlugService(http, baseUrl, oauthService) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.oauthService = oauthService;
        this.fluege$ = new ReplaySubject_1.ReplaySubject(1);
    }
    FlugService.prototype.findById = function (id) {
        var headers = new http_2.Headers();
        headers.set('Accept', 'text/json');
        var search = new http_3.URLSearchParams();
        search.set('flugNummer', id);
        var url = this.baseUrl + "/flug";
        return this
            .http
            .get(url, { search: search, headers: headers })
            .map(function (response) { return response.json(); });
    };
    FlugService.prototype.save = function (flug) {
        var headers = new http_2.Headers();
        headers.set('Content-Type', 'text/json');
        var url = this.baseUrl + "/flug";
        return this
            .http
            .post(url, JSON.stringify(flug), { headers: headers })
            .map(function (response) { return response.text(); });
    };
    FlugService.prototype.find = function (von, nach) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new http_2.Headers();
            headers.set('Accept', 'text/json');
            headers.set('Authorization', 'Bearer ' + _this.oauthService.getAccessToken());
            var search = new http_3.URLSearchParams();
            search.set('abflugort', von);
            search.set('zielort', nach);
            // Ohne Auth. erreichbarer Service
            // var url = this.baseUrl + "/flug";
            // Dieser Service hier verlangt ein Token:
            var url = _this.baseUrl + "/SecureFlug";
            return _this
                .http
                .get(url, { search: search, headers: headers })
                .map(function (response) { return response.json(); })
                .subscribe(function (fluege) {
                // this.fluege = fluege;
                _this.fluege$.next(fluege);
                _this.error = "";
                resolve(fluege);
            }, function (err) {
                console.error(err);
                _this.error = err;
                reject(err);
            });
        });
    };
    FlugService = __decorate([
        core_1.Injectable(),
        __param(1, core_2.Inject('BASE_URL')), 
        __metadata('design:paramtypes', [http_1.Http, String, oauth_service_1.OAuthService])
    ], FlugService);
    return FlugService;
})();
exports.FlugService = FlugService;
//# sourceMappingURL=flug.service.js.map