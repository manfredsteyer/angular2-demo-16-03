
import {Component} from "angular2/core";
import {EventEmitter} from "angular2/core";
import {Input} from "angular2/core";
import {Output} from "angular2/core";
import {ChangeDetectionStrategy} from "angular2/core";

@Component({
    selector: 'flug-card',
    templateUrl: '/angular2-steyer/app/flug-card/flug-card.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlugCard {

    @Input('item') flug;
    @Input() selectedItem;
    @Output() selectedItemChange = new EventEmitter();


    select() {
        this.selectedItemChange.emit(this.flug); // $event
    }

}