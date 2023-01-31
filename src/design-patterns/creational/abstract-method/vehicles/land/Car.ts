import ILandVehicle from "./interfaces/ILandVehicle";

export default class Car implements ILandVehicle {
    getCargo(): void {
        console.log('collecting customers.')
    }

    startRoute(): void {
        this.getCargo();
        console.log('starting route.');
    }
}
