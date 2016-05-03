import {Directive, Renderer, ElementRef, Self, forwardRef, provide} from 'angular2/core';

import {NG_VALUE_ACCESSOR, DefaultValueAccessor } from 'angular2/common';
import {CONST_EXPR} from 'angular2/src/facade/lang';
import {Input} from "angular2/core";
import {Attribute} from "angular2/core";

// <label>{{myLabel}}</label>
// <div [feld]="myLabel">

// <input [(ngModel)]="..."

@Directive({
    selector: //<input type="date" format="de">
        'input[date]', // <input date (input)="input($event.target.value)" (blur)="blur()" >
    host: {'(input)': 'input($event.target.value)', '(blur)': 'blur()'},
    providers: [provide(
        NG_VALUE_ACCESSOR, {useExisting: DateValueAccessor, multi: true})]
})
export class DateValueAccessor extends DefaultValueAccessor {

    constructor(_renderer: Renderer, _elementRef: ElementRef) {
        super(_renderer, _elementRef);
    }

    @Input()
    format: string;

    blur() {
        //this.onChange(this.lastInput);
        this.onTouched();
    }

    lastInput="";

    input(viewValue) {

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
    }

    writeValue(modelValue: any): void {

        console.debug("Format: " + this.format);

        var delim = ""
        if (this.format == "en") {
            delim = "/"
        }
        else {
            delim = ".";
        }


        // Write to view
        if (modelValue) {
            var date = new Date(modelValue);
            modelValue = date.getDate() + delim + (date.getMonth()+1) + delim + date.getFullYear();
        }

        super.writeValue(modelValue);

    }

} 