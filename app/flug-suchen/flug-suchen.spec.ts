import { it, inject, injectAsync, beforeEachProviders } from 'angular2/testing';

import {ROUTER_PROVIDERS} from 'angular2/router';
import {provide} from 'angular2/core';

import {FlugSuchen} from './flug-suchen.component';
import {FlugService} from './../services/flug.service';
import {FORM_PROVIDERS } from 'angular2/common';
import {Flug} from "../models/flug";


class FlugServiceMock {
    fluege = [];
    findById(id) { return null; }
    find(von, nach) {
        this.fluege = [{ id: 1, abflugort: 'Graz', zielort: 'Hamburg', datum: '2017-01-01' }];
        return Promise.resolve(this.fluege);
    }
    save(flug) { return null; }
}

describe('FlugSuchen', () => {
 
    beforeEachProviders(() => [
        FORM_PROVIDERS,
        FlugSuchen,
        provide(FlugService, { useClass: FlugServiceMock }),
    ]);
    
    it('should have no selected flight initially', inject([FlugSuchen], (flugSuchen: FlugSuchen) => {
        expect(flugSuchen.selectedFlug).toBeUndefined();
    }));
    
    it('should load flights', injectAsync([FlugSuchen], (flugSuchen: FlugSuchen) => {

            flugSuchen.filter.controls['von'].value = "Graz";
            flugSuchen.filter.controls['nach'].value = "Hamburg";

            return flugSuchen.suchen().then((fluege: Flug[]) => {

                expect(fluege.length).toEqual(1);

            });

    }));
    
});