System.register(['angular2/core', "angular2/http"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var FlugSuchen;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            FlugSuchen = (function () {
                function FlugSuchen(http) {
                    this.http = http;
                    this.von = 'Graz';
                    this.nach = 'Hamburg';
                    this.fluege = [];
                }
                FlugSuchen.prototype.suchen = function () {
                    var _this = this;
                    var search = new http_1.URLSearchParams();
                    search.set('abflugort', this.von);
                    search.set('zielort', this.nach);
                    var url = "http://www.angular.at/api/flug";
                    this
                        .http
                        .get(url, { search: search })
                        .map(function (response) { return response.json(); })
                        .subscribe(// <-- Observable, RxJS
                    function (fluege) {
                        _this.fluege = fluege;
                    }, function (err) {
                        console.error('Fehler beim Laden von Flügen!');
                        console.error(err);
                    });
                    /*
                                .then((fluege: Array<Flug>) => {
                                    this.fluege = fluege;
                                })
                                .catch((err) => {
                                    console.error('Fehler beim Laden von Flügen!');
                                    console.error(err);
                                });
                    */
                };
                FlugSuchen.prototype.select = function (flug) {
                    this.selectedFlug = flug;
                };
                FlugSuchen = __decorate([
                    core_1.Component({
                        selector: 'flug-suchen',
                        templateUrl: 'app/flug-suchen/flug-suchen.component.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], FlugSuchen);
                return FlugSuchen;
            })();
            exports_1("FlugSuchen", FlugSuchen);
        }
    }
});
//# sourceMappingURL=flug-suchen.component.js.map