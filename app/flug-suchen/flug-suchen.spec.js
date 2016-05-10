var testing_1 = require('angular2/testing');
var core_1 = require('angular2/core');
var flug_suchen_component_1 = require('./flug-suchen.component');
var flug_service_1 = require('./../services/flug.service');
var common_1 = require('angular2/common');
var FlugServiceMock = (function () {
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
        expect(flugSuchen.selectedFlug)
            .toBeUndefined();
    }));
    testing_1.it('should load flights', testing_1.injectAsync([flug_suchen_component_1.FlugSuchen], function (flugSuchen) {
        // Arrange
        flugSuchen.filter.controls['von'].value = "Graz";
        flugSuchen.filter.controls['nach'].value = "Hamburg";
        return flugSuchen.suchen().then(function (fluege) {
            expect(fluege.length).toEqual(1);
        });
    }));
});
//# sourceMappingURL=flug-suchen.spec.js.map