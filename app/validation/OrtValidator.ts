import {Control, Validator} from "angular2/common";
import {AbstractControl} from "angular2/common";


export class OrtValidator {

    public static validate(c: AbstractControl): any {

        if (c.value == 'Graz'
            || c.value == 'Frankfurt'
            || c.value == 'Hamburg'
            || c.value == 'Wien'
            || c.value == 'Zürich') {

            return {};
        }

        return {
            ort: true
        }

    }

}