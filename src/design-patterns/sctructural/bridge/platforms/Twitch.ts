import IPlatform from "./IPlatform";

export default class Twitch implements IPlatform {

    constructor() {
        this.configureRMTP();
        console.log('Twitch: Live...')
    }

    authToken(): void {
        console.log('Twitch: successful authentication.')
    }

    configureRMTP(): void {
        console.log('Twitch: configuring the transmission....')
    }
}
