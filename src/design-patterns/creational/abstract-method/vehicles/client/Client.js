"use strict";
exports.__esModule = true;
var Client = /** @class */ (function () {
    function Client(factory) {
        this.vehicle = factory.createTransportVehicle();
        this.aircraft = factory.createTransportAirCraft();
    }
    Client.prototype.startRoute = function () {
        this.vehicle.startRoute();
        this.aircraft.startRoute();
    };
    return Client;
}());
exports["default"] = Client;
