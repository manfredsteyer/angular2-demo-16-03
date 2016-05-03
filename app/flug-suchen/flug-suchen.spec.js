System.register(['angular2/testing', 'angular2/core', './flug-suchen.component', './../services/flug.service', 'angular2/common'], function(exports_1) {
    var testing_1, core_1, flug_suchen_component_1, flug_service_1, common_1;
    var FlugServiceMock;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (flug_suchen_component_1_1) {
                flug_suchen_component_1 = flug_suchen_component_1_1;
            },
            function (flug_service_1_1) {
                flug_service_1 = flug_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            FlugServiceMock = (function () {
                function FlugServiceMock() {
                    this.fluege = [];
                }
                FlugServiceMock.prototype.findById = function (id) { return null; };
                FlugServiceMock.prototype.find = function (von, nach) {
                    this.fluege = [{ id: 1, abflugort: 'Graz', zielort: 'Hamburg', datum: '2017-01-01' }];
                    return Promise.resolve(this.fluege);
                };
                FlugServiceMock.prototype.save = function (flug) { return null; };
                return FlugServiceMock;
            })();
            describe('FlugSuchen', function () {
                testing_1.beforeEachProviders(function () { return [
                    common_1.FORM_PROVIDERS,
                    flug_suchen_component_1.FlugSuchen,
                    core_1.provide(flug_service_1.FlugService, { useClass: FlugServiceMock }),
                ]; });
                testing_1.it('should have no selected flight initially', testing_1.inject([flug_suchen_component_1.FlugSuchen], function (flugSuchen) {
                    expect(flugSuchen.selectedFlug).toBeUndefined();
                }));
                testing_1.it('should load flights', testing_1.injectAsync([flug_suchen_component_1.FlugSuchen], function (flugSuchen) {
                    flugSuchen.filter.controls['von'].value = "Graz";
                    flugSuchen.filter.controls['nach'].value = "Hamburg";
                    return flugSuchen.suchen().then(function (fluege) {
                        expect(fluege.length).toEqual(1);
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=flug-suchen.spec.js.map