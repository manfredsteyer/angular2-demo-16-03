import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {FlugSuchen} from "./flug-suchen/flug-suchen.component";
import 'rxjs/add/operator/map';
import {HTTP_PROVIDERS} from "angular2/http";

var services = [
    HTTP_PROVIDERS
];

bootstrap(FlugSuchen, services);
