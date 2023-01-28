import IDB from "./IDB";

export default class MySql implements IDB {
    getProductById(id: number): string {
        return `product id: ${id}`;
    }
}
