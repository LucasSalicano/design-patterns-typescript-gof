import IPaymentInstrument from "./IPaymentInstrument";

export default abstract class Card implements IPaymentInstrument{
    collectPayment(): void {
        console.log('successful payment.');
    }

    validate(): void {
        console.log('basic validadate.');
    }

}
