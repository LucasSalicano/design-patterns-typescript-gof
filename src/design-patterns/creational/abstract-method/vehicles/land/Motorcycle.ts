import ILandVehicle from "./interfaces/ILandVehicle";

export default class Motorcycle implements ILandVehicle {
    getCargo(): void {
        console.log('collecting package..')
    }

    startRoute(): void {
        this.getCargo();
        console.log('starting route.');
    }
}
