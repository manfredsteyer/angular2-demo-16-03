System.register([], function(exports_1) {
    var OrtValidator;
    return {
        setters:[],
        execute: function() {
            OrtValidator = (function () {
                function OrtValidator() {
                }
                OrtValidator.validate = function (c) {
                    if (c.value == 'Graz'
                        || c.value == 'Frankfurt'
                        || c.value == 'Hamburg'
                        || c.value == 'Wien'
                        || c.value == 'Zürich') {
                        return {};
                    }
                    return {
                        ort: true
                    };
                };
                return OrtValidator;
            })();
            exports_1("OrtValidator", OrtValidator);
        }
    }
});
//# sourceMappingURL=OrtValidator.js.map