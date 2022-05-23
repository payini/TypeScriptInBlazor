var helpers;
(function (helpers) {
    // Simple logger class that exposes a log method.
    var Logger = /** @class */ (function () {
        function Logger() {
        }
        // Log text to the console.
        Logger.prototype.log = function (text) {
            console.log(text);
        };
        return Logger;
    }());
    // Method to return an instance of the Logger class.
    function getLogger() {
        return new Logger();
    }
    helpers.getLogger = getLogger;
})(helpers || (helpers = {}));
//# sourceMappingURL=helpers.js.map