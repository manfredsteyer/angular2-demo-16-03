System.register([], function(exports_1) {
    var OrtAsyncValidator;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by steyer on 02.05.2016.
             */
            OrtAsyncValidator = (function () {
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
            exports_1("OrtAsyncValidator", OrtAsyncValidator);
        }
    }
});
//# sourceMappingURL=OrtAsyncValidator.js.map