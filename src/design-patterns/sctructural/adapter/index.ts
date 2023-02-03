import IPayPalPayments from "./paypal/IPayPalPayments";
import PayPal from "./paypal/PayPal";
import Payonner from "./payonner/Payonner";
import PayonnerAdapter from "./adapters/PayonnerAdapter";

const payment: IPayPalPayments = new PayonnerAdapter(new Payonner());

payment.paypalPayment();
payment.paypalReceive();
