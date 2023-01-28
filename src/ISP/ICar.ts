export default interface ICar {
    on(): void;

    off(): void;

    configuration(color: string, year: number, engine: number, doors: number): void;
}
