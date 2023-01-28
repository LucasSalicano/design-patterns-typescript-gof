import IMotorcycle from "./IMotorcycle";

export default class Motorcycle implements IMotorcycle {
    configuration(color: string, year: number, engine: number): void {
        console.log(`${color}, ${year}, ${engine}`);
    }

    off(): void {
        console.log('turn off');
    }

    on(): void {
        console.log('turn on');
    }
}
