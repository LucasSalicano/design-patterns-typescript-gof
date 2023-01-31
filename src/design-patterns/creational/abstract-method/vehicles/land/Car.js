"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getCargo = function () {
        console.log('collecting customers.');
    };
    Car.prototype.startRoute = function () {
        this.getCargo();
        console.log('starting route.');
    };
    return Car;
}());
exports["default"] = Car;
