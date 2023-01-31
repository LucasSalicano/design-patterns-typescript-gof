import IVehicle from "./interface/IVehicle";

export default class Motorcycle implements IVehicle {
    getCargo(): void {
        console.log('collecting package.')
    }

    startRoute(): void {
        this.getCargo();
        console.log('starting delivery.');
    }
}
