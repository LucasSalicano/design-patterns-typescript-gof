import IVehicle from "./interface/IVehicle";

export default  class Car implements IVehicle {
    getCargo(): void {
        console.log('customers in the car.');
    }

    startRoute(): void {
        this.getCargo();
        console.log('starting route.')
    }

}
