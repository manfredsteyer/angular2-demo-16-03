System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2, core_3, core_4;
    var DateComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
                core_4 = core_1_1;
            }],
        execute: function() {
            /**
             * Created by steyer on 03.05.2016.
             */
            // <date-component [date]="datum"
            //                 (dateChange)="datum = $event" >
            DateComponent = (function () {
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
            })();
            exports_1("DateComponent", DateComponent);
        }
    }
});
//# sourceMappingURL=date-component.js.map