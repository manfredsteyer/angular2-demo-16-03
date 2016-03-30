import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {FlugSuchen} from "./flug-suchen/flug-suchen.component";
import 'rxjs/add/operator/map';
import {HTTP_PROVIDERS} from "angular2/http";
import {FlugService} from "./services/flug.service";
import {APP_SERVICES} from "./services/app-services";
import {provide} from "angular2/core";
import {PLATFORM_PIPES} from "angular2/core";
import {OrtPipe} from "./pipes/ort.pipe";
import {ROUTER_PROVIDERS} from "angular2/router";
import {APP_BASE_HREF} from "angular2/router";

var services = [
    // provide(PLATFORM_PIPES, {useValue: OrtPipe, multi: true}),
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, {useValue: '/angular2-starter'})
];

bootstrap(AppComponent, services);
