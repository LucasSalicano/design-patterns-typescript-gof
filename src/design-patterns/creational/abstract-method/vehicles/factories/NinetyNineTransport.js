"use strict";
exports.__esModule = true;
var Car_1 = require("../land/Car");
var Airplane_1 = require("../aerial/Airplane");
var NinetyNineTransport = /** @class */ (function () {
    function NinetyNineTransport() {
    }
    NinetyNineTransport.prototype.createTransportAirCraft = function () {
        return new Airplane_1["default"]();
    };
    NinetyNineTransport.prototype.createTransportVehicle = function () {
        return new Car_1["default"]();
    };
    return NinetyNineTransport;
}());
exports["default"] = NinetyNineTransport;
