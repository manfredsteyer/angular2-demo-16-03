import {FlugService} from "./flug.service";
import {provide} from "angular2/core";

export var APP_SERVICES = [
    FlugService,
    provide('BASE_URL', {useValue: 'http://www.angular.at/api'})
    // provide('BASE_URL', { useFactory: () => { return 'http://www.angular.at/api'} })
];