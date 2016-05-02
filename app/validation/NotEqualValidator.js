System.register([], function(exports_1) {
    var NotEqualValidator;
    /**
     * Created by steyer on 02.05.2016.
     */
    function validateAlternative(fieldName1, fieldName2) {
        return function (cg) {
            var von = cg.controls[fieldName1].value;
            var nach = cg.controls[fieldName2].value;
            if (von == nach) {
                return { route: true };
            }
            return {};
        };
    }
    exports_1("validateAlternative", validateAlternative);
    return {
        setters:[],
        execute: function() {
            NotEqualValidator = (function () {
                function NotEqualValidator() {
                }
                NotEqualValidator.validate = function (fieldName1, fieldName2) {
                    return function (cg) {
                        var von = cg.controls[fieldName1].value;
                        var nach = cg.controls[fieldName2].value;
                        if (von == nach) {
                            return { route: true };
                        }
                        return {};
                    };
                };
                return NotEqualValidator;
            })();
            exports_1("NotEqualValidator", NotEqualValidator);
        }
    }
});
//# sourceMappingURL=NotEqualValidator.js.map