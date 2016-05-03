import { it, inject, injectAsync, beforeEachProviders } from 'angular2/testing';

import {ROUTER_PROVIDERS} from 'angular2/router';
import {provide} from 'angular2/core';
import {FORM_PROVIDERS} from 'angular2/common';
import {FlugSuchen} from './flug-suchen.component';
import {FlugService} from './../services/flug.service';
import {BaseRequestOptions, Http, Response, ResponseOptions} from 'angular2/http';
import {MockBackend, MockConnection} from 'angular2/http/testing';
import 'rxjs/add/operator/map';
import {Flug} from "../models/flug";
import {Control} from "angular2/common";

var HTTP_MOCK_PROVIDERS = [
    BaseRequestOptions,
    MockBackend,
    provide(Http, { useFactory: function(backend, defaultOptions) {
        return new Http(backend, defaultOptions);
    }, deps: [MockBackend, BaseRequestOptions]})  
];

describe('FlugSuchen with Mock', () => {
 
    beforeEachProviders(() => [
        FORM_PROVIDERS,
        HTTP_MOCK_PROVIDERS, // HTTP_PROVIDERS
        FlugSuchen,
        FlugService,
        provide("BASE_URL", {useValue: 'http://www.angular.at/api'}),
    ]);
    
    it('should load flights', injectAsync([FlugSuchen, MockBackend], (flugSuchen: FlugSuchen, backend: MockBackend) => {

            // Arrange
            var connection;
            backend.connections.subscribe((c: MockConnection) => { 

                console.debug('Mocking response for ' + c.request.url);

                if (c.request.url == "http://www.angular.at/api/flug?abflugort=Graz&zielort=Hamburg") {

                    c.mockRespond(
                        new Response(
                            new ResponseOptions(
                                { body: '[{"id": 1, "abflugort": "Graz", "zielort": "Hamburg", "datum": "2017-01-01"}]' })));

                }
            });
            
            var von = <Control>flugSuchen.filter.controls['von'];
            var nach = <Control>flugSuchen.filter.controls['nach'];

            von.updateValue('Graz');
            nach.updateValue('Hamburg');

    
             // Act
            return flugSuchen.suchen().then((fluege: Flug[]) => {
                expect(fluege.length).toEqual(1);
                expect(fluege[0].id).toEqual(1);
                expect(fluege[0].abflugort).toEqual('Graz');
            });
            

        }));

});