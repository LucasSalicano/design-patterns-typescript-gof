export default class Vehicle {
    constructor(
        private color: string,
        private year: number,
        private engine: number,
        private seats: number,
        private doors: number,
    ) {}

    car(): void {
        console.log(`Vehicle info: ${this.color}, ${this.year}` +
        `, ${this.engine}, ${this.seats}, ${this.doors}`)
        this.start()
    }

    start(): void {
        console.log('turning on...');
    }
}
