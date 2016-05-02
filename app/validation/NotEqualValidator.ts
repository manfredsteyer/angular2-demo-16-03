import {ControlGroup} from "angular2/common";
/**
 * Created by steyer on 02.05.2016.
 */


export function validateAlternative(fieldName1: string, fieldName2: string)  {

    return function(cg: ControlGroup): any {
        var von = cg.controls[fieldName1].value;
        var nach = cg.controls[fieldName2].value;

        if (von == nach) {
            return { route: true }
        }
        return { };
    }
}




export class NotEqualValidator {

    static validate(fieldName1: string, fieldName2: string)  {

        return function(cg: ControlGroup): any {
            var von = cg.controls[fieldName1].value;
            var nach = cg.controls[fieldName2].value;

            if (von == nach) {
                return { route: true }
            }
            return { };
        }
    }

}