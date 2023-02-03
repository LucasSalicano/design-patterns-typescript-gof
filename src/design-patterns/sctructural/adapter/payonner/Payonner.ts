import IPayonnerPayment from "./IPayonnerPayment";
import Token from "../utils/Token";

export default class Payonner implements IPayonnerPayment {
    private token: Token;

    authToken(): Token {
        return new Token();
    }

    receivePayment(): void {
        this.token = this.authToken();
    }

    sendPayment(): void {
        console.log('Payonner: Receiving payments...')
    }
}
