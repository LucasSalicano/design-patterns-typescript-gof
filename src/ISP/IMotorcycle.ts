export default interface IMotorcycle {
    on(): void;

    off(): void;

    configuration(color: string, year: number, engine: number): void;
}
