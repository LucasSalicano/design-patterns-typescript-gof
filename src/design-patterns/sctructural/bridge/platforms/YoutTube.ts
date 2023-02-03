import IPlatform from "./IPlatform";

export default class YoutTube implements IPlatform {

    constructor() {
        this.configureRMTP();
        console.log('YouTube: Live...')
    }

    authToken(): void {
        console.log('YouTube: successful authentication.')
    }

    configureRMTP(): void {
        console.log('YouTube: configuring the transmission....')
    }
}
