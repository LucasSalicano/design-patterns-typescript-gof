import ICar from "./ICar";

export default class Car implements ICar {
    configuration(color: string, year: number, engine: number, doors: number): void {
        console.log(`${color}, ${year}, ${engine}, ${doors}`);
    }

    off(): void {
        console.log('turn off');
    }

    on(): void {
        console.log('turn on');
    }
}
