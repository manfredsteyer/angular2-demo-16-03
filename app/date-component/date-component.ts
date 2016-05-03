import {Input} from "angular2/core";
import {OnChanges} from "angular2/core";
import {EventEmitter} from "angular2/core";
import {Output} from "angular2/core";
import {Component} from "angular2/core";
/**
 * Created by steyer on 03.05.2016.
 */


// <date-component [date]="datum"
//                 (dateChange)="datum = $event" >
@Component({
    selector: 'date-component',
    templateUrl: 'app/date-component/date-component.html'
})
export class DateComponent implements OnChanges {

    @Input() date;
    @Output() dateChange = new EventEmitter();

    day;
    month;
    year;
    hour;
    minute;

    constructor() {

        console.debug("constructor");
    }

    ngOnInit() {
        console.debug("ngOnInit");
    }

    ngOnChanges() {
        var datum = new Date(this.date);

        this.day = datum.getDate();
        this.month = datum.getMonth() + 1;
        this.year = datum.getFullYear();
        this.hour = datum.getHours();
        this.minute = datum.getMinutes();
    }

    apply() {

        var date = new Date();

        date.setDate(this.day);
        date.setMonth(this.month -1);
        date.setFullYear(this.year);
        date.setHours(this.hour);
        date.setMinutes(this.minute);
        date.setSeconds(0);
        date.setMilliseconds(0);

        this.dateChange.emit(date.toISOString());
        // $event
    }

}