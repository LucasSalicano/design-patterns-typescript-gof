import ITransmission from "./ITransmission";
import IPlatform from "../platforms/IPlatform";

export default class Live implements ITransmission {

    constructor(private platform: IPlatform) {
    }

    broadcasting(): void {
        console.log('Starting transmission...');
    }

    result(): void {
        console.log('*** TRANSMITTING ***');
    }
}
