import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {FlugSuchen} from "./flug-suchen/flug-suchen.component";
import 'rxjs/add/operator/map';
import {HTTP_PROVIDERS} from "angular2/http";
import {FlugService} from "./services/flug.service";
import {APP_SERVICES} from "./services/app-services";
import {provide} from "angular2/core";

var services = [
    HTTP_PROVIDERS
];

bootstrap(FlugSuchen, services);
