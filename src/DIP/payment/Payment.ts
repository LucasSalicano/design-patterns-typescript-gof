import DBFactory from "../factory/DBFactory";

export default class Payment {
    pay(productId: number): void {
        const factory = DBFactory.create();
        const product = factory.getProductById(productId);

        console.log(`pay ${product}`);
    }
}
