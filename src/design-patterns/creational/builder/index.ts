import Director from "./director/Director";
import VehicleBuilder from "./builders/VehicleBuilder";

const builder: VehicleBuilder = new VehicleBuilder();
const director: Director = new Director(builder);

director.constructSedanCar();
console.log(director.result());
