import {Control} from "angular2/common";
/**
 * Created by steyer on 02.05.2016.
 */


export class OrtAsyncValidator {

    static validateAsync(c: Control): Promise<any> {

        return new Promise<any>((resolve /*, reject*/) => {


            setTimeout(
                () => {

                    if (c.value == 'Graz'
                        || c.value == 'Frankfurt'
                        || c.value == 'Hamburg'
                        || c.value == 'Zürich') {

                        resolve({});
                    }
                    else {
                        resolve({ ortAsync: true});
                    }
                },
                3000
            );

        });

    }
}