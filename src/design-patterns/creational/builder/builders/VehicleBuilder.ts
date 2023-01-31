import IBuilder from "./IBuilder";
import {Wheel} from "../components/Wheel";
import Vehicle from "../products/Vehicle";
import Engine from "../components/Engine";
import {Transmission} from "../components/Transmission";
import {VehicleType} from "../components/VehicleType";

export default class VehicleBuilder implements IBuilder {
    private vehicle = new Vehicle();

    addWheel(wheel: Wheel) {
        this.vehicle.wheels = wheel;
        return this;
    }

    getResult(): Vehicle {
        const vehicle = this.vehicle;
        this.reset();
        return vehicle;
    }

    reset(): void {
        this.vehicle = new Vehicle();
    }

    setEngine(engine: Engine) {
        this.vehicle.engine = engine;
        return this;
    }

    setSeats(seats: number) {
        this.vehicle.seats = seats;
        return this;
    }

    setTransmission(transmission: Transmission) {
        this.vehicle.transmission = transmission;
        return this;
    }

    setVehicleType(type: VehicleType) {
        this.vehicle.vehicleType = type;
        return this;
    }
}
