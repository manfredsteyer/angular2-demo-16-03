import {AbstractControl} from "angular2/common";
import {OrtAsyncValidator} from "./OrtAsyncValidator";
import {Directive} from "angular2/core";
import {NG_ASYNC_VALIDATORS} from "angular2/common";
import {provide} from "angular2/core";
/**
 * Created by steyer on 03.05.2016.
 */

@Directive({
    selector: "input[ortAsync]",
    providers: [provide(NG_ASYNC_VALIDATORS,
                    {useExisting: OrtAsyncValidatorDirective, multi: true })]
})
export class OrtAsyncValidatorDirective {


    public validate(c: AbstractControl): Promise<any> {
        return OrtAsyncValidator.validateAsync(c);
    }


}