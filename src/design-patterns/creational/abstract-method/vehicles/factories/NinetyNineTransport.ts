import ITransportFactory from "./interfaces/ITransportFactory";
import IAircraft from "../aerial/interfaces/IAircraft";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import Car from "../land/Car";
import Airplane from "../aerial/Airplane";

export default class NinetyNineTransport implements ITransportFactory {
    createTransportAirCraft(): IAircraft {
        return new Airplane();
    }

    createTransportVehicle(): ILandVehicle {
        return new Car();
    }
}
