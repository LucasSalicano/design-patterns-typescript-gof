import IBuilder from "../builders/IBuilder";
import {VehicleType} from "../components/VehicleType";
import {Transmission} from "../components/Transmission";
import Engine from "../components/Engine";
import {Wheel} from "../components/Wheel";

export default class Director {
    constructor(private builder: IBuilder) {
    }

    constructSedanCar() {
        this.builder.setVehicleType(VehicleType.SEDAN)
            .setSeats(5)
            .setTransmission(Transmission.AUTOMATIC)
            .setEngine(new Engine(1600))
            .addWheel(new Wheel(15))
            .addWheel(new Wheel(15))
            .addWheel(new Wheel(15))
            .addWheel(new Wheel(15));

        return this;
    }

    result() {
        return this.builder.getResult();
    }
}
