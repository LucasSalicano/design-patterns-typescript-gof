import Client from "./vehicles/client/Client";
import NinetyNineTransport from "./vehicles/factories/NinetyNineTransport";
import UberTransport from "./vehicles/factories/UberTransport";

const client = new Client(new NinetyNineTransport());
client.startRoute();

const clientTwo = new Client(new UberTransport());
clientTwo.startRoute();
