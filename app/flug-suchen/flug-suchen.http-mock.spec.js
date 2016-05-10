var testing_1 = require('angular2/testing');
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var flug_suchen_component_1 = require('./flug-suchen.component');
var flug_service_1 = require('./../services/flug.service');
var http_1 = require('angular2/http');
var testing_2 = require('angular2/http/testing');
require('rxjs/add/operator/map');
var HTTP_MOCK_PROVIDERS = [
    http_1.BaseRequestOptions,
    testing_2.MockBackend,
    core_1.provide(http_1.Http, { useFactory: function (backend, defaultOptions) {
            return new http_1.Http(backend, defaultOptions);
        }, deps: [testing_2.MockBackend, http_1.BaseRequestOptions] })
];
describe('FlugSuchen with Mock', function () {
    testing_1.beforeEachProviders(function () { return [
        common_1.FORM_PROVIDERS,
        HTTP_MOCK_PROVIDERS,
        flug_suchen_component_1.FlugSuchen,
        flug_service_1.FlugService,
        core_1.provide("BASE_URL", { useValue: 'http://www.angular.at/api' }),
    ]; });
    testing_1.it('should load flights', testing_1.injectAsync([flug_suchen_component_1.FlugSuchen, testing_2.MockBackend], function (flugSuchen, backend) {
        // Arrange
        var connection;
        backend.connections.subscribe(function (c) {
            console.debug('Mocking response for ' + c.request.url);
            if (c.request.url == "http://www.angular.at/api/flug?abflugort=Graz&zielort=Hamburg") {
                c.mockRespond(new http_1.Response(new http_1.ResponseOptions({ body: '[{"id": 1, "abflugort": "Graz", "zielort": "Hamburg", "datum": "2017-01-01"}]' })));
            }
        });
        var von = flugSuchen.filter.controls['von'];
        var nach = flugSuchen.filter.controls['nach'];
        von.updateValue('Graz');
        nach.updateValue('Hamburg');
        // Act
        return flugSuchen.suchen().then(function (fluege) {
            expect(fluege.length).toEqual(1);
            expect(fluege[0].id).toEqual(1);
            expect(fluege[0].abflugort).toEqual('Graz');
        });
    }));
});
//# sourceMappingURL=flug-suchen.http-mock.spec.js.map