import Client from "./SRP/Client";
import Notify from "./SRP/Notify";
import Vehicle from "./OCP/Vehicle";
import CreditCard from "./LSP/CreditCard";
import Car from "./ISP/Car";
import Motorcycle from "./ISP/Motorcycle";
import Payment from "./DIP/payment/Payment";

// Single Reponsibility Principle
const client = new Client();
client.create()

const notify = new Notify(client);
notify.send()

// Open / Closed Principle

const vehicle = new Vehicle(
    "Black",
    2023,
    2.0,
    4,
    4
);

vehicle.car()

// Liskov Substituion Principle

const creditCard = new CreditCard();
creditCard.validate();
creditCard.collectPayment();

// Interface Segregation Principle

const car = new Car();
car.configuration('Red',2023, 2.0, 4)
car.on();
car.off();

const motorcycle = new Motorcycle();
motorcycle.configuration('Black',2023, 125)
motorcycle.on();
motorcycle.off();

// Depency Inversion Principle

const payment = new Payment();
payment.pay(100);
