import IPayPalPayments from "../paypal/IPayPalPayments";
import Token from "../utils/Token";
import Payonner from "../payonner/Payonner";

export default class PayonnerAdapter implements IPayPalPayments {
    private token: Token;

    constructor(private payonner: Payonner) {
    }

    authToken(): Token {
        return new Token();
    }

    paypalPayment(): void {
        this.payonner.sendPayment();
    }

    paypalReceive(): void {
        this.payonner.sendPayment();
    }
}
