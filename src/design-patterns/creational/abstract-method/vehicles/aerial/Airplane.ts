import IAircraft from "./interfaces/IAircraft";

export default class Airplane implements IAircraft {
    checkWind(): void {
        console.log('Wind okay.')
    }

    getCargo(): void {
        console.log('passengerns on the plane.');
    }

    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log('starting...');
    }
}
