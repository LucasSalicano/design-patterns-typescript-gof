import Card from "./Card";

export default class CreditCard extends Card{

    validate() {
        console.log('we are checking the limit...')
    }

    collectPayment() {
        super.collectPayment();
    }

}
