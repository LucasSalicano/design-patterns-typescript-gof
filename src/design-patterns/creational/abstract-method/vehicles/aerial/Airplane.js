"use strict";
exports.__esModule = true;
var Airplane = /** @class */ (function () {
    function Airplane() {
    }
    Airplane.prototype.checkWind = function () {
        console.log('Wind okay.');
    };
    Airplane.prototype.getCargo = function () {
        console.log('passengerns on the plane.');
    };
    Airplane.prototype.startRoute = function () {
        this.checkWind();
        this.getCargo();
        console.log('starting...');
    };
    return Airplane;
}());
exports["default"] = Airplane;
