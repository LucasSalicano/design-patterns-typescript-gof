import Vehicle from "../products/Vehicle";
import {Wheel} from "../components/Wheel";
import {VehicleType} from "../components/VehicleType";
import Engine from "../components/Engine";
import {Transmission} from "../components/Transmission";

export default interface IBuilder {
    reset(): void;

    getResult(): Vehicle;

    addWheel(whell: Wheel);

    setVehicleType(type: VehicleType);

    setSeats(seats: number);

    setEngine(engine: Engine);

    setTransmission(transmission: Transmission);
}
