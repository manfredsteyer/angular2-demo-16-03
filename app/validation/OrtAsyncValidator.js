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
})();
exports.OrtAsyncValidator = OrtAsyncValidator;
//# sourceMappingURL=OrtAsyncValidator.js.map