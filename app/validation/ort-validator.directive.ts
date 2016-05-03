import {Directive} from "angular2/core";
import {Validator} from "angular2/common";
import {AbstractControl} from "angular2/common";
import {OrtValidator} from "./OrtValidator";
import {NG_VALIDATORS} from "angular2/common";
import {provide} from "angular2/core";
/**
 * Created by steyer on 03.05.2016.
 */

@Directive({
    selector: 'input[ort]', // <input ort>
        // xy --> <xy></xy>
        // .xy --> <div class="xy"></div>
        // #xy --> <div id="xy"></div>
        // [xy] --> <div xy></div>
    providers: [provide(NG_VALIDATORS,
                    {useExisting: OrtValidatorDirective, multi: true})]
})
export class OrtValidatorDirective implements Validator{

    validate(c: AbstractControl): any {
        return OrtValidator.validate(c);
    }

}