import IPayPalPayments from "./IPayPalPayments";
import Token from "../utils/Token";

export default class PayPal implements IPayPalPayments {
    private token: Token;

    authToken(): Token {
        return new Token();
    }

    paypalPayment(): void {
        this.token = this.authToken();
    }

    paypalReceive(): void {
        console.log('Paypayl: Receiving payments...')
    }
}
