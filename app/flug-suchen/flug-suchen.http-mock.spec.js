System.register(['angular2/testing', 'angular2/core', 'angular2/common', './flug-suchen.component', './../services/flug.service', 'angular2/http', 'angular2/http/testing', 'rxjs/add/operator/map'], function(exports_1) {
    var testing_1, core_1, common_1, flug_suchen_component_1, flug_service_1, http_1, testing_2;
    var HTTP_MOCK_PROVIDERS;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (flug_suchen_component_1_1) {
                flug_suchen_component_1 = flug_suchen_component_1_1;
            },
            function (flug_service_1_1) {
                flug_service_1 = flug_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            },
            function (_1) {}],
        execute: function() {
            HTTP_MOCK_PROVIDERS = [
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
        }
    }
});
//# sourceMappingURL=flug-suchen.http-mock.spec.js.map