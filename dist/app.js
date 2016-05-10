webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__filename) {"use strict";
	///<reference path="../node_modules/angular2/src/router/location/location_strategy.d.ts"/>
	var browser_1 = __webpack_require__(1);
	var app_component_1 = __webpack_require__(228);
	__webpack_require__(299);
	var http_1 = __webpack_require__(263);
	var core_1 = __webpack_require__(23);
	var router_1 = __webpack_require__(229);
	var core_2 = __webpack_require__(23);
	var flug_card_1 = __webpack_require__(301);
	var router_2 = __webpack_require__(229);
	var router_3 = __webpack_require__(229);
	var services;
	services = [
	    // provide(PLATFORM_PIPES, {useValue: OrtPipe, multi: true}),
	    http_1.HTTP_PROVIDERS,
	    router_1.ROUTER_PROVIDERS,
	    core_1.provide('BASE_URL', { useValue: 'http://www.angular.at/api' }),
	    core_1.provide(core_2.PLATFORM_DIRECTIVES, { useValue: flug_card_1.FlugCard, multi: true }),
	    core_1.provide(router_2.LocationStrategy, { useClass: router_3.HashLocationStrategy })
	];
	browser_1.bootstrap(app_component_1.AppComponent, services);
	console.debug(__filename);
	
	/* WEBPACK VAR INJECTION */}.call(exports, "app\\main.ts"))

/***/ },

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	//import {Component} from 'angular2/core';
	var core_1 = __webpack_require__(23);
	var router_1 = __webpack_require__(229);
	var router_2 = __webpack_require__(229);
	var home_1 = __webpack_require__(259);
	var flug_buchen_1 = __webpack_require__(260);
	var flug_event_service_1 = __webpack_require__(290);
	var warnkorb_1 = __webpack_require__(298);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'my-app',
	            templateUrl: 'app/app.component.html',
	            directives: [router_1.ROUTER_DIRECTIVES, warnkorb_1.Warenkorb],
	            providers: [flug_event_service_1.FlugEventService]
	        }),
	        router_2.RouteConfig([
	            { path: '/home', component: home_1.Home, name: 'Home', useAsDefault: true },
	            { path: '/flug-buchen/...', component: flug_buchen_1.FlugBuchen, name: 'FlugBuchen' }
	        ]), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(23);
	var Home = (function () {
	    function Home() {
	        this.info = "Willkommen!";
	    }
	    Home = __decorate([
	        core_1.Component({
	            templateUrl: 'app/home/home.html'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Home);
	    return Home;
	}());
	exports.Home = Home;


/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(23);
	var router_1 = __webpack_require__(229);
	var flug_suchen_component_1 = __webpack_require__(261);
	var passagier_suchen_1 = __webpack_require__(292);
	var flug_edit_1 = __webpack_require__(293);
	var router_2 = __webpack_require__(229);
	var flug_service_1 = __webpack_require__(262);
	var FlugBuchen = (function () {
	    function FlugBuchen() {
	    }
	    FlugBuchen = __decorate([
	        core_1.Component({
	            templateUrl: 'app/flug-buchen/flug-buchen.html',
	            directives: [router_2.ROUTER_DIRECTIVES],
	            providers: [flug_service_1.FlugService]
	        }),
	        router_1.RouteConfig([
	            { path: 'flug-suchen', component: flug_suchen_component_1.FlugSuchen, name: 'FlugSuchen', useAsDefault: true },
	            { path: 'passagier-suchen', component: passagier_suchen_1.PassagierSuchen, name: 'PassagierSuchen' },
	            { path: 'flug-edit/:id', component: flug_edit_1.FlugEdit, name: 'FlugEdit' }
	        ]), 
	        __metadata('design:paramtypes', [])
	    ], FlugBuchen);
	    return FlugBuchen;
	}());
	exports.FlugBuchen = FlugBuchen;


/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(23);
	var flug_service_1 = __webpack_require__(262);
	var app_services_1 = __webpack_require__(285);
	var ort_pipe_1 = __webpack_require__(286);
	var router_1 = __webpack_require__(229);
	var common_1 = __webpack_require__(117);
	var common_2 = __webpack_require__(117);
	var OrtValidator_1 = __webpack_require__(287);
	var OrtAsyncValidator_1 = __webpack_require__(288);
	var NotEqualValidator_1 = __webpack_require__(289);
	var flug_event_service_1 = __webpack_require__(290);
	var core_2 = __webpack_require__(23);
	var FlugSuchen = (function () {
	    function FlugSuchen(flugEventService, flugService, fb) {
	        this.flugEventService = flugEventService;
	        this.flugService = flugService;
	        this.fb = fb;
	        this.flugEventService.selectedFlug$.subscribe(function (flug) { return console.debug(flug); });
	        this.formDesc = [
	            { label: 'Abflugort', fieldName: 'von' },
	            { label: 'Zielort', fieldName: 'nach', control: null },
	        ];
	        this.filter = fb.group({
	            von: [
	                'Graz',
	                common_2.Validators.compose([
	                    common_2.Validators.required,
	                    common_2.Validators.minLength(3),
	                    common_2.Validators.maxLength(30),
	                    OrtValidator_1.OrtValidator.validate
	                ]),
	                common_2.Validators.composeAsync([
	                    OrtAsyncValidator_1.OrtAsyncValidator.validateAsync
	                ])
	            ],
	            nach: ['Hamburg', common_2.Validators.required]
	        });
	        this.filter.validator = NotEqualValidator_1.NotEqualValidator.validate('von', 'nach');
	        // this.filter.validator = validateAlternative;
	        // this.filter.controls.von.valid
	        // this.filter.controls.von.subscribe
	        this.filter.valueChanges.subscribe(function () {
	            console.debug("Änderung im Formular");
	        });
	    }
	    FlugSuchen.prototype.delay = function () {
	        /*
	        var datum = new Date(this.fluege[0].datum);
	        datum.setMinutes(datum.getMinutes() + 15);
	        var oldFlug = this.fluege[0];
	
	        // Neuen Flug einrichten, weil alter Flug "immutable" ist!
	        this.fluege[0] = {
	            abflugort: oldFlug.abflugort,
	            zielort: oldFlug.zielort,
	            id: oldFlug.id,
	            datum: datum.toISOString()
	        };
	        */
	    };
	    Object.defineProperty(FlugSuchen.prototype, "fluege$", {
	        // public fluege: Array<Flug> = [];
	        get: function () {
	            return this.flugService.fluege$;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    FlugSuchen.prototype.suchen = function () {
	        var von = this.filter.value.von;
	        var nach = this.filter.value.nach;
	        return this.flugService.find(von, nach);
	    };
	    FlugSuchen.prototype.select = function (flug) {
	        this.selectedFlug = flug;
	        this.flugEventService.selectedFlug$.next(flug);
	    };
	    FlugSuchen = __decorate([
	        core_1.Component({
	            selector: 'flug-suchen',
	            //templateUrl: 'app/flug-suchen/flug-suchen.component.html',
	            template: __webpack_require__(291),
	            providers: [app_services_1.APP_SERVICES],
	            directives: [router_1.ROUTER_DIRECTIVES,],
	            pipes: [ort_pipe_1.OrtPipe],
	            changeDetection: core_2.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [flug_event_service_1.FlugEventService, flug_service_1.FlugService, common_1.FormBuilder])
	    ], FlugSuchen);
	    return FlugSuchen;
	}());
	exports.FlugSuchen = FlugSuchen;


/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var http_1 = __webpack_require__(263);
	var http_2 = __webpack_require__(263);
	var http_3 = __webpack_require__(263);
	var core_1 = __webpack_require__(23);
	var core_2 = __webpack_require__(23);
	var ReplaySubject_1 = __webpack_require__(278);
	var FlugService = (function () {
	    function FlugService(http, baseUrl) {
	        this.http = http;
	        this.baseUrl = baseUrl;
	        this.fluege$ = new ReplaySubject_1.ReplaySubject(1);
	    }
	    FlugService.prototype.findById = function (id) {
	        var headers = new http_2.Headers();
	        headers.set('Accept', 'text/json');
	        var search = new http_3.URLSearchParams();
	        search.set('flugNummer', id);
	        var url = this.baseUrl + "/flug";
	        return this
	            .http
	            .get(url, { search: search, headers: headers })
	            .map(function (response) { return response.json(); });
	    };
	    FlugService.prototype.save = function (flug) {
	        var headers = new http_2.Headers();
	        headers.set('Content-Type', 'text/json');
	        var url = this.baseUrl + "/flug";
	        return this
	            .http
	            .post(url, JSON.stringify(flug), { headers: headers })
	            .map(function (response) { return response.text(); });
	    };
	    FlugService.prototype.find = function (von, nach) {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            var headers = new http_2.Headers();
	            headers.set('Accept', 'text/json');
	            var search = new http_3.URLSearchParams();
	            search.set('abflugort', von);
	            search.set('zielort', nach);
	            var url = _this.baseUrl + "/flug";
	            return _this
	                .http
	                .get(url, { search: search, headers: headers })
	                .map(function (response) { return response.json(); })
	                .subscribe(function (fluege) {
	                // this.fluege = fluege;
	                _this.fluege$.next(fluege);
	                _this.error = "";
	                resolve(fluege);
	            }, function (err) {
	                _this.error = err;
	                reject(err);
	            });
	        });
	    };
	    FlugService = __decorate([
	        core_1.Injectable(),
	        __param(1, core_2.Inject('BASE_URL')), 
	        __metadata('design:paramtypes', [http_1.Http, String])
	    ], FlugService);
	    return FlugService;
	}());
	exports.FlugService = FlugService;


/***/ },

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(52);
	var queue_1 = __webpack_require__(279);
	var observeOn_1 = __webpack_require__(283);
	var ReplaySubject = (function (_super) {
	    __extends(ReplaySubject, _super);
	    function ReplaySubject(bufferSize, windowTime, scheduler) {
	        if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
	        if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
	        _super.call(this);
	        this.events = [];
	        this.scheduler = scheduler;
	        this.bufferSize = bufferSize < 1 ? 1 : bufferSize;
	        this._windowTime = windowTime < 1 ? 1 : windowTime;
	    }
	    ReplaySubject.prototype._next = function (value) {
	        var now = this._getNow();
	        this.events.push(new ReplayEvent(now, value));
	        this._trimBufferThenGetEvents(now);
	        _super.prototype._next.call(this, value);
	    };
	    ReplaySubject.prototype._subscribe = function (subscriber) {
	        var events = this._trimBufferThenGetEvents(this._getNow());
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
	        }
	        var index = -1;
	        var len = events.length;
	        while (++index < len && !subscriber.isUnsubscribed) {
	            subscriber.next(events[index].value);
	        }
	        return _super.prototype._subscribe.call(this, subscriber);
	    };
	    ReplaySubject.prototype._getNow = function () {
	        return (this.scheduler || queue_1.queue).now();
	    };
	    ReplaySubject.prototype._trimBufferThenGetEvents = function (now) {
	        var bufferSize = this.bufferSize;
	        var _windowTime = this._windowTime;
	        var events = this.events;
	        var eventsCount = events.length;
	        var spliceCount = 0;
	        // Trim events that fall out of the time window.
	        // Start at the front of the list. Break early once
	        // we encounter an event that falls within the window.
	        while (spliceCount < eventsCount) {
	            if ((now - events[spliceCount].time) < _windowTime) {
	                break;
	            }
	            spliceCount += 1;
	        }
	        if (eventsCount > bufferSize) {
	            spliceCount = Math.max(spliceCount, eventsCount - bufferSize);
	        }
	        if (spliceCount > 0) {
	            events.splice(0, spliceCount);
	        }
	        return events;
	    };
	    return ReplaySubject;
	}(Subject_1.Subject));
	exports.ReplaySubject = ReplaySubject;
	var ReplayEvent = (function () {
	    function ReplayEvent(time, value) {
	        this.time = time;
	        this.value = value;
	    }
	    return ReplayEvent;
	}());
	//# sourceMappingURL=ReplaySubject.js.map

/***/ },

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var QueueScheduler_1 = __webpack_require__(280);
	exports.queue = new QueueScheduler_1.QueueScheduler();
	//# sourceMappingURL=queue.js.map

/***/ },

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var QueueAction_1 = __webpack_require__(281);
	var FutureAction_1 = __webpack_require__(282);
	var QueueScheduler = (function () {
	    function QueueScheduler() {
	        this.active = false;
	        this.actions = [];
	        this.scheduledId = null;
	    }
	    QueueScheduler.prototype.now = function () {
	        return Date.now();
	    };
	    QueueScheduler.prototype.flush = function () {
	        if (this.active || this.scheduledId) {
	            return;
	        }
	        this.active = true;
	        var actions = this.actions;
	        for (var action = void 0; action = actions.shift();) {
	            action.execute();
	        }
	        this.active = false;
	    };
	    QueueScheduler.prototype.schedule = function (work, delay, state) {
	        if (delay === void 0) { delay = 0; }
	        return (delay <= 0) ?
	            this.scheduleNow(work, state) :
	            this.scheduleLater(work, delay, state);
	    };
	    QueueScheduler.prototype.scheduleNow = function (work, state) {
	        return new QueueAction_1.QueueAction(this, work).schedule(state);
	    };
	    QueueScheduler.prototype.scheduleLater = function (work, delay, state) {
	        return new FutureAction_1.FutureAction(this, work).schedule(state, delay);
	    };
	    return QueueScheduler;
	}());
	exports.QueueScheduler = QueueScheduler;
	//# sourceMappingURL=QueueScheduler.js.map

/***/ },

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var FutureAction_1 = __webpack_require__(282);
	var QueueAction = (function (_super) {
	    __extends(QueueAction, _super);
	    function QueueAction() {
	        _super.apply(this, arguments);
	    }
	    QueueAction.prototype._schedule = function (state, delay) {
	        if (delay === void 0) { delay = 0; }
	        if (delay > 0) {
	            return _super.prototype._schedule.call(this, state, delay);
	        }
	        this.delay = delay;
	        this.state = state;
	        var scheduler = this.scheduler;
	        scheduler.actions.push(this);
	        scheduler.flush();
	        return this;
	    };
	    return QueueAction;
	}(FutureAction_1.FutureAction));
	exports.QueueAction = QueueAction;
	//# sourceMappingURL=QueueAction.js.map

/***/ },

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(54);
	var Subscription_1 = __webpack_require__(60);
	var FutureAction = (function (_super) {
	    __extends(FutureAction, _super);
	    function FutureAction(scheduler, work) {
	        _super.call(this);
	        this.scheduler = scheduler;
	        this.work = work;
	    }
	    FutureAction.prototype.execute = function () {
	        if (this.isUnsubscribed) {
	            throw new Error('How did did we execute a canceled Action?');
	        }
	        this.work(this.state);
	    };
	    FutureAction.prototype.schedule = function (state, delay) {
	        if (delay === void 0) { delay = 0; }
	        if (this.isUnsubscribed) {
	            return this;
	        }
	        return this._schedule(state, delay);
	    };
	    FutureAction.prototype._schedule = function (state, delay) {
	        var _this = this;
	        if (delay === void 0) { delay = 0; }
	        this.delay = delay;
	        this.state = state;
	        var id = this.id;
	        if (id != null) {
	            this.id = undefined;
	            root_1.root.clearTimeout(id);
	        }
	        this.id = root_1.root.setTimeout(function () {
	            _this.id = null;
	            var scheduler = _this.scheduler;
	            scheduler.actions.push(_this);
	            scheduler.flush();
	        }, delay);
	        return this;
	    };
	    FutureAction.prototype._unsubscribe = function () {
	        var _a = this, id = _a.id, scheduler = _a.scheduler;
	        var actions = scheduler.actions;
	        var index = actions.indexOf(this);
	        if (id != null) {
	            this.id = null;
	            root_1.root.clearTimeout(id);
	        }
	        if (index !== -1) {
	            actions.splice(index, 1);
	        }
	        this.work = null;
	        this.state = null;
	        this.scheduler = null;
	    };
	    return FutureAction;
	}(Subscription_1.Subscription));
	exports.FutureAction = FutureAction;
	//# sourceMappingURL=FutureAction.js.map

/***/ },

/***/ 283:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(58);
	var Notification_1 = __webpack_require__(284);
	function observeOn(scheduler, delay) {
	    if (delay === void 0) { delay = 0; }
	    return this.lift(new ObserveOnOperator(scheduler, delay));
	}
	exports.observeOn = observeOn;
	var ObserveOnOperator = (function () {
	    function ObserveOnOperator(scheduler, delay) {
	        if (delay === void 0) { delay = 0; }
	        this.scheduler = scheduler;
	        this.delay = delay;
	    }
	    ObserveOnOperator.prototype.call = function (subscriber) {
	        return new ObserveOnSubscriber(subscriber, this.scheduler, this.delay);
	    };
	    return ObserveOnOperator;
	}());
	exports.ObserveOnOperator = ObserveOnOperator;
	var ObserveOnSubscriber = (function (_super) {
	    __extends(ObserveOnSubscriber, _super);
	    function ObserveOnSubscriber(destination, scheduler, delay) {
	        if (delay === void 0) { delay = 0; }
	        _super.call(this, destination);
	        this.scheduler = scheduler;
	        this.delay = delay;
	    }
	    ObserveOnSubscriber.dispatch = function (_a) {
	        var notification = _a.notification, destination = _a.destination;
	        notification.observe(destination);
	    };
	    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
	        this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
	    };
	    ObserveOnSubscriber.prototype._next = function (value) {
	        this.scheduleMessage(Notification_1.Notification.createNext(value));
	    };
	    ObserveOnSubscriber.prototype._error = function (err) {
	        this.scheduleMessage(Notification_1.Notification.createError(err));
	    };
	    ObserveOnSubscriber.prototype._complete = function () {
	        this.scheduleMessage(Notification_1.Notification.createComplete());
	    };
	    return ObserveOnSubscriber;
	}(Subscriber_1.Subscriber));
	exports.ObserveOnSubscriber = ObserveOnSubscriber;
	var ObserveOnMessage = (function () {
	    function ObserveOnMessage(notification, destination) {
	        this.notification = notification;
	        this.destination = destination;
	    }
	    return ObserveOnMessage;
	}());
	//# sourceMappingURL=observeOn.js.map

/***/ },

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(53);
	var Notification = (function () {
	    function Notification(kind, value, exception) {
	        this.kind = kind;
	        this.value = value;
	        this.exception = exception;
	        this.hasValue = kind === 'N';
	    }
	    Notification.prototype.observe = function (observer) {
	        switch (this.kind) {
	            case 'N':
	                return observer.next && observer.next(this.value);
	            case 'E':
	                return observer.error && observer.error(this.exception);
	            case 'C':
	                return observer.complete && observer.complete();
	        }
	    };
	    Notification.prototype.do = function (next, error, complete) {
	        var kind = this.kind;
	        switch (kind) {
	            case 'N':
	                return next && next(this.value);
	            case 'E':
	                return error && error(this.exception);
	            case 'C':
	                return complete && complete();
	        }
	    };
	    Notification.prototype.accept = function (nextOrObserver, error, complete) {
	        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
	            return this.observe(nextOrObserver);
	        }
	        else {
	            return this.do(nextOrObserver, error, complete);
	        }
	    };
	    Notification.prototype.toObservable = function () {
	        var kind = this.kind;
	        switch (kind) {
	            case 'N':
	                return Observable_1.Observable.of(this.value);
	            case 'E':
	                return Observable_1.Observable.throw(this.exception);
	            case 'C':
	                return Observable_1.Observable.empty();
	        }
	    };
	    Notification.createNext = function (value) {
	        if (typeof value !== 'undefined') {
	            return new Notification('N', value);
	        }
	        return this.undefinedValueNotification;
	    };
	    Notification.createError = function (err) {
	        return new Notification('E', undefined, err);
	    };
	    Notification.createComplete = function () {
	        return this.completeNotification;
	    };
	    Notification.completeNotification = new Notification('C');
	    Notification.undefinedValueNotification = new Notification('N', undefined);
	    return Notification;
	}());
	exports.Notification = Notification;
	//# sourceMappingURL=Notification.js.map

/***/ },

/***/ 285:
/***/ function(module, exports) {

	"use strict";
	exports.APP_SERVICES = [];


/***/ },

/***/ 286:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(23);
	var OrtPipe = (function () {
	    function OrtPipe() {
	    }
	    OrtPipe.prototype.transform = function (value, args) {
	        var fmt = args[0]; // short oder long
	        var short, long;
	        switch (value) {
	            case "Hamburg":
	                short = "HAM";
	                long = "Hamburg Airport";
	                break;
	            case "Graz":
	                short = "GRZ";
	                long = "Flughafen Graz-Thalerhof";
	                break;
	            default:
	                short = long = "ROM";
	        }
	        if (fmt == 'short')
	            return short;
	        return long;
	    };
	    OrtPipe = __decorate([
	        core_1.Pipe({
	            name: 'ort',
	            pure: true
	        }), 
	        __metadata('design:paramtypes', [])
	    ], OrtPipe);
	    return OrtPipe;
	}());
	exports.OrtPipe = OrtPipe;


/***/ },

/***/ 287:
/***/ function(module, exports) {

	"use strict";
	var OrtValidator = (function () {
	    function OrtValidator() {
	    }
	    OrtValidator.validate = function (c) {
	        if (c.value == 'Graz'
	            || c.value == 'Frankfurt'
	            || c.value == 'Hamburg'
	            || c.value == 'Wien'
	            || c.value == 'Zürich') {
	            return {};
	        }
	        return {
	            ort: true
	        };
	    };
	    return OrtValidator;
	}());
	exports.OrtValidator = OrtValidator;


/***/ },

/***/ 288:
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by steyer on 02.05.2016.
	 */
	var OrtAsyncValidator = (function () {
	    function OrtAsyncValidator() {
	    }
	    OrtAsyncValidator.validateAsync = function (c) {
	        return new Promise(function (resolve /*, reject*/) {
	            setTimeout(function () {
	                if (c.value == 'Graz'
	                    || c.value == 'Frankfurt'
	                    || c.value == 'Hamburg'
	                    || c.value == 'Zürich') {
	                    resolve({});
	                }
	                else {
	                    resolve({ ortAsync: true });
	                }
	            }, 3000);
	        });
	    };
	    return OrtAsyncValidator;
	}());
	exports.OrtAsyncValidator = OrtAsyncValidator;


/***/ },

/***/ 289:
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by steyer on 02.05.2016.
	 */
	function validateAlternative(fieldName1, fieldName2) {
	    return function (cg) {
	        var von = cg.controls[fieldName1].value;
	        var nach = cg.controls[fieldName2].value;
	        if (von == nach) {
	            return { route: true };
	        }
	        return {};
	    };
	}
	exports.validateAlternative = validateAlternative;
	var NotEqualValidator = (function () {
	    function NotEqualValidator() {
	    }
	    NotEqualValidator.validate = function (fieldName1, fieldName2) {
	        return function (cg) {
	            var von = cg.controls[fieldName1].value;
	            var nach = cg.controls[fieldName2].value;
	            if (von == nach) {
	                return { route: true };
	            }
	            return {};
	        };
	    };
	    return NotEqualValidator;
	}());
	exports.NotEqualValidator = NotEqualValidator;


/***/ },

/***/ 290:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by steyer on 09.05.2016.
	 */
	"use strict";
	var ReplaySubject_1 = __webpack_require__(278);
	var FlugEventService = (function () {
	    function FlugEventService() {
	        this.selectedFlug$ = new ReplaySubject_1.ReplaySubject(1);
	    }
	    return FlugEventService;
	}());
	exports.FlugEventService = FlugEventService;


/***/ },

/***/ 291:
/***/ function(module, exports) {

	module.exports = "<h1>Flug suchen!</h1>\r\n\r\n<form [ngFormModel]=\"filter\">\r\n    <div class=\"form-group\">\r\n        <label>Von</label>\r\n        <input class=\"form-control\" ngControl=\"von\" name=\"von\">\r\n\r\n        <div *ngIf=\"!filter.controls.von.valid && !filter.controls.von.pending\">\r\n            Von weist Fehler auf!\r\n        </div>\r\n\r\n        <div *ngIf=\"filter.hasError('route')\">\r\n            Das ist doch eine unsinnige Route!!\r\n        </div>\r\n\r\n        <div *ngIf=\"filter.controls.von.hasError('required')\">\r\n            Von ist doch ein Pflichtfeld!\r\n        </div>\r\n        <div *ngIf=\"filter.controls.von.hasError('minlength')\">\r\n            Von muss doch min. 3 Zeichen haben!\r\n        </div>\r\n        <div *ngIf=\"filter.controls.von.hasError('maxlength')\">\r\n            Von darf doch max. 30 Zeichen haben!\r\n        </div>\r\n        <div *ngIf=\"filter.controls.von.hasError('ort')\">\r\n            Dieser Ort wird doch gar nicht angeflogen!\r\n        </div>\r\n        <div *ngIf=\"filter.controls.von.hasError('ortAsync')\">\r\n            Für diesen Ort sind doch alle Flüge ausgebucht!\r\n        </div>\r\n        <div *ngIf=\"filter.controls.von.pending\">\r\n            <marquee>\r\n                Validierung wird gerade ausgeführt!!\r\n            </marquee>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Nach</label>\r\n        <input class=\"form-control\" ngControl=\"nach\" name=\"nach\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <input\r\n                type=\"button\"\r\n                class=\"btn btn-default\"\r\n                value=\"Suchen!\"\r\n                (click)=\"suchen()\">\r\n\r\n        <input\r\n                type=\"button\"\r\n                class=\"btn btn-default\"\r\n                value=\"Verspätung!\"\r\n                (click)=\"delay()\">\r\n\r\n\r\n    </div>\r\n\r\n    <!--\r\n    <div *ngFor=\"#entry of formDesc\">\r\n        <label>{{entry.label}}</label>\r\n        <input [ngControl]=\"entry.fieldName\">\r\n    </div>\r\n    -->\r\n</form>\r\n\r\n\r\n\r\n<div *ngFor=\"#flug of fluege$ | async\" class=\"col-sm-4\">\r\n\r\n    <flug-card\r\n            [item]=\"flug\"\r\n            [selectedItem]=\"selectedFlug\"\r\n            (selectedItemChange)=\"select($event)\">\r\n\r\n        <a class=\"btn btn-default\" [routerLink]=\"['../FlugEdit', { id: flug.id } ]\">Editieren</a>\r\n\r\n    </flug-card>\r\n\r\n\r\n    <!--\r\n                [selectedItem]=\"selectedFlug\"\r\n            (selectedItemChange)=\"selectedFlug = $event\">\r\n\r\n    -->\r\n</div>\r\n\r\n<pre *ngIf=\"selectedFlug\">\r\n    {{ selectedFlug | json }}\r\n</pre>\r\n\r\n<!--\r\n<table class=\"table table-striped\" [hidden]=\"fluege.length == 0\">\r\n\r\n    <tr *ngFor=\"#flug of fluege\"\r\n        [class.active]=\"flug.id == selectedFlug?.id\">\r\n        <td>{{flug.id}}</td>\r\n        <td>{{flug.datum.substr(0,10)}}</td>\r\n        <td>{{flug.abflugort | ort:'short'}}</td>\r\n        <td>{{flug.zielort | ort:'long' }}</td>\r\n        <td>\r\n            <a style=\"cursor: hand\" href=\"javascript:void(0)\" (click)=\"select(flug)\">Auswählen</a>\r\n            |\r\n\r\n\r\n        </td>\r\n    </tr>\r\n\r\n</table>\r\n-->";

/***/ },

/***/ 292:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(23);
	var PassagierSuchen = (function () {
	    function PassagierSuchen() {
	        this.info = "Passagier suchen";
	    }
	    PassagierSuchen = __decorate([
	        core_1.Component({
	            templateUrl: 'app/passagier-suchen/passagier-suchen.html'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], PassagierSuchen);
	    return PassagierSuchen;
	}());
	exports.PassagierSuchen = PassagierSuchen;


/***/ },

/***/ 293:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var router_1 = __webpack_require__(229);
	var flug_service_1 = __webpack_require__(262);
	var core_1 = __webpack_require__(23);
	var ort_validator_directive_1 = __webpack_require__(294);
	var ort_async_validator_directive_1 = __webpack_require__(295);
	var date_value_accessor_1 = __webpack_require__(296);
	var date_component_1 = __webpack_require__(297);
	var router_2 = __webpack_require__(229);
	var FlugEdit = (function () {
	    function FlugEdit(flugService, params) {
	        var _this = this;
	        this.flugService = flugService;
	        this.flug = {};
	        this.warnDialog = {
	            show: false,
	            resolve: null,
	            reject: null
	        };
	        this.dirty = false;
	        this.info = "Flug Detail";
	        var id = params.get('id');
	        this.id = id;
	        flugService.findById(id).subscribe(function (flug) {
	            _this.flug = flug;
	            _this.error = "";
	        }, function (err) {
	            console.error(err);
	            _this.error = "Fehler beim Laden!";
	        });
	    }
	    FlugEdit.prototype.formChanged = function () {
	        this.dirty = true;
	    };
	    FlugEdit.prototype.deactive = function (answer) {
	        if (answer) {
	            this.warnDialog.resolve(true);
	        }
	        else {
	            this.warnDialog.show = false;
	            this.warnDialog.resolve(false);
	        }
	    };
	    FlugEdit.prototype.routerCanDeactivate = function (next, prev) {
	        var _this = this;
	        if (!this.dirty)
	            return true;
	        return new Promise(function (resolve, reject) {
	            _this.warnDialog.show = true;
	            _this.warnDialog.reject = reject;
	            _this.warnDialog.resolve = resolve;
	        });
	    };
	    FlugEdit.prototype.routerOnActivate = function (next, prev) {
	    };
	    FlugEdit.prototype.routerOnDeactivate = function (next, prev) {
	    };
	    FlugEdit.prototype.save = function () {
	        var _this = this;
	        this.flugService.save(this.flug).subscribe(function (message) {
	            //this.message = message;
	            _this.error = "";
	            _this.message = "Flug wurde gespeichert!";
	        }, function (err) {
	            console.error(err);
	            _this.error = err.text();
	        });
	    };
	    FlugEdit = __decorate([
	        core_1.Component({
	            templateUrl: '/angular2-steyer/app/flug-edit/flug-edit.html',
	            directives: [
	                ort_validator_directive_1.OrtValidatorDirective,
	                ort_async_validator_directive_1.OrtAsyncValidatorDirective,
	                date_value_accessor_1.DateValueAccessor,
	                date_component_1.DateComponent
	            ]
	        }),
	        router_2.CanActivate(function (next, prev) {
	            return true;
	        }), 
	        __metadata('design:paramtypes', [flug_service_1.FlugService, router_1.RouteParams])
	    ], FlugEdit);
	    return FlugEdit;
	}());
	exports.FlugEdit = FlugEdit;


/***/ },

/***/ 294:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(23);
	var OrtValidator_1 = __webpack_require__(287);
	var common_1 = __webpack_require__(117);
	var core_2 = __webpack_require__(23);
	/**
	 * Created by steyer on 03.05.2016.
	 */
	var OrtValidatorDirective = (function () {
	    function OrtValidatorDirective() {
	    }
	    OrtValidatorDirective.prototype.validate = function (c) {
	        return OrtValidator_1.OrtValidator.validate(c);
	    };
	    OrtValidatorDirective = __decorate([
	        core_1.Directive({
	            selector: 'input[ort]',
	            // xy --> <xy></xy>
	            // .xy --> <div class="xy"></div>
	            // #xy --> <div id="xy"></div>
	            // [xy] --> <div xy></div>
	            providers: [core_2.provide(common_1.NG_VALIDATORS, { useExisting: OrtValidatorDirective, multi: true })]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], OrtValidatorDirective);
	    return OrtValidatorDirective;
	}());
	exports.OrtValidatorDirective = OrtValidatorDirective;


/***/ },

/***/ 295:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var OrtAsyncValidator_1 = __webpack_require__(288);
	var core_1 = __webpack_require__(23);
	var common_1 = __webpack_require__(117);
	var core_2 = __webpack_require__(23);
	/**
	 * Created by steyer on 03.05.2016.
	 */
	var OrtAsyncValidatorDirective = (function () {
	    function OrtAsyncValidatorDirective() {
	    }
	    OrtAsyncValidatorDirective.prototype.validate = function (c) {
	        return OrtAsyncValidator_1.OrtAsyncValidator.validateAsync(c);
	    };
	    OrtAsyncValidatorDirective = __decorate([
	        core_1.Directive({
	            selector: "input[ortAsync]",
	            providers: [core_2.provide(common_1.NG_ASYNC_VALIDATORS, { useExisting: OrtAsyncValidatorDirective, multi: true })]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], OrtAsyncValidatorDirective);
	    return OrtAsyncValidatorDirective;
	}());
	exports.OrtAsyncValidatorDirective = OrtAsyncValidatorDirective;


/***/ },

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(23);
	var common_1 = __webpack_require__(117);
	var core_2 = __webpack_require__(23);
	// <label>{{myLabel}}</label>
	// <div [feld]="myLabel">
	// <input [(ngModel)]="..."
	var DateValueAccessor = (function (_super) {
	    __extends(DateValueAccessor, _super);
	    function DateValueAccessor(_renderer, _elementRef) {
	        _super.call(this, _renderer, _elementRef);
	        this.lastInput = "";
	    }
	    DateValueAccessor.prototype.blur = function () {
	        //this.onChange(this.lastInput);
	        this.onTouched();
	    };
	    DateValueAccessor.prototype.input = function (viewValue) {
	        console.debug("Format: " + this.format);
	        // Write back to model   
	        if (viewValue) {
	            var reg;
	            if (this.format == "en") {
	                reg = /\//;
	            }
	            else {
	                reg = /\./;
	            }
	            viewValue = viewValue.split(reg);
	            viewValue = viewValue[2] + "-" + viewValue[1] + "-" + viewValue[0];
	        }
	        this.onChange(viewValue);
	        //this.lastInput = viewValue;
	    };
	    DateValueAccessor.prototype.writeValue = function (modelValue) {
	        console.debug("Format: " + this.format);
	        var delim = "";
	        if (this.format == "en") {
	            delim = "/";
	        }
	        else {
	            delim = ".";
	        }
	        // Write to view
	        if (modelValue) {
	            var date = new Date(modelValue);
	            modelValue = date.getDate() + delim + (date.getMonth() + 1) + delim + date.getFullYear();
	        }
	        _super.prototype.writeValue.call(this, modelValue);
	    };
	    __decorate([
	        core_2.Input(), 
	        __metadata('design:type', String)
	    ], DateValueAccessor.prototype, "format", void 0);
	    DateValueAccessor = __decorate([
	        core_1.Directive({
	            selector: //<input type="date" format="de">
	            'input[date]',
	            host: { '(input)': 'input($event.target.value)', '(blur)': 'blur()' },
	            providers: [core_1.provide(common_1.NG_VALUE_ACCESSOR, { useExisting: DateValueAccessor, multi: true })]
	        }), 
	        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
	    ], DateValueAccessor);
	    return DateValueAccessor;
	}(common_1.DefaultValueAccessor));
	exports.DateValueAccessor = DateValueAccessor;


/***/ },

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(23);
	var core_2 = __webpack_require__(23);
	var core_3 = __webpack_require__(23);
	var core_4 = __webpack_require__(23);
	/**
	 * Created by steyer on 03.05.2016.
	 */
	// <date-component [date]="datum"
	//                 (dateChange)="datum = $event" >
	var DateComponent = (function () {
	    function DateComponent() {
	        this.dateChange = new core_2.EventEmitter();
	        console.debug("constructor");
	    }
	    DateComponent.prototype.ngOnInit = function () {
	        console.debug("ngOnInit");
	    };
	    DateComponent.prototype.ngOnChanges = function () {
	        var datum = new Date(this.date);
	        this.day = datum.getDate();
	        this.month = datum.getMonth() + 1;
	        this.year = datum.getFullYear();
	        this.hour = datum.getHours();
	        this.minute = datum.getMinutes();
	    };
	    DateComponent.prototype.apply = function () {
	        var date = new Date();
	        date.setDate(this.day);
	        date.setMonth(this.month - 1);
	        date.setFullYear(this.year);
	        date.setHours(this.hour);
	        date.setMinutes(this.minute);
	        date.setSeconds(0);
	        date.setMilliseconds(0);
	        this.dateChange.emit(date.toISOString());
	        // $event
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], DateComponent.prototype, "date", void 0);
	    __decorate([
	        core_3.Output(), 
	        __metadata('design:type', Object)
	    ], DateComponent.prototype, "dateChange", void 0);
	    DateComponent = __decorate([
	        core_4.Component({
	            selector: 'date-component',
	            templateUrl: 'app/date-component/date-component.html'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DateComponent);
	    return DateComponent;
	}());
	exports.DateComponent = DateComponent;


/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(23);
	var flug_event_service_1 = __webpack_require__(290);
	var Warenkorb = (function () {
	    function Warenkorb(flugEventService) {
	        var _this = this;
	        this.fluege = [];
	        this.flugEventService = flugEventService;
	        flugEventService.selectedFlug$.subscribe(function (flug) {
	            if (_this.fluege.length >= 3) {
	                _this.fluege.splice(0, 1);
	            }
	            _this.fluege.push(flug);
	        });
	    }
	    Warenkorb.prototype.remove = function (f) {
	        var idx = this.fluege.findIndex(function (flug) { return flug == f; });
	        this.fluege.splice(idx, 1);
	    };
	    Warenkorb = __decorate([
	        core_1.Component({
	            selector: 'warenkorb',
	            templateUrl: 'app/warenkorb/warenkorb.html'
	        }), 
	        __metadata('design:paramtypes', [flug_event_service_1.FlugEventService])
	    ], Warenkorb);
	    return Warenkorb;
	}());
	exports.Warenkorb = Warenkorb;


/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(23);
	var core_2 = __webpack_require__(23);
	var core_3 = __webpack_require__(23);
	var core_4 = __webpack_require__(23);
	var core_5 = __webpack_require__(23);
	var FlugCard = (function () {
	    function FlugCard() {
	        this.selectedItemChange = new core_2.EventEmitter();
	    }
	    FlugCard.prototype.select = function () {
	        this.selectedItemChange.emit(this.flug); // $event
	    };
	    __decorate([
	        core_3.Input('item'), 
	        __metadata('design:type', Object)
	    ], FlugCard.prototype, "flug", void 0);
	    __decorate([
	        core_3.Input(), 
	        __metadata('design:type', Object)
	    ], FlugCard.prototype, "selectedItem", void 0);
	    __decorate([
	        core_4.Output(), 
	        __metadata('design:type', Object)
	    ], FlugCard.prototype, "selectedItemChange", void 0);
	    FlugCard = __decorate([
	        core_1.Component({
	            selector: 'flug-card',
	            templateUrl: 'app/flug-card/flug-card.html',
	            changeDetection: core_5.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FlugCard);
	    return FlugCard;
	}());
	exports.FlugCard = FlugCard;


/***/ }

});
//# sourceMappingURL=app.js.map