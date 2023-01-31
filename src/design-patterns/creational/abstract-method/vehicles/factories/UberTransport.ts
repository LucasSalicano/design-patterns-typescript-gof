import ITransportFactory from "./interfaces/ITransportFactory";
import Helicopter from "../aerial/Helicopter";
import Motorcycle from "../land/Motorcycle";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import IAircraft from "../aerial/interfaces/IAircraft";

export default class UberTransport implements ITransportFactory {
    createTransportAirCraft(): IAircraft {
        return new Helicopter();
    }

    createTransportVehicle(): ILandVehicle {
        return new Motorcycle();
    }

}
