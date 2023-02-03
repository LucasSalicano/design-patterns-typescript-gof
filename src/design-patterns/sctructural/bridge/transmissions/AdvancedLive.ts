import Live from "./Live";
import IPlatform from "../platforms/IPlatform";

export default class AdvancedLive extends Live {

    constructor(platform: IPlatform) {
        super(platform);
    }

    subtitles(): void {
        console.log('Subtitle active in transmission.');
    }

    comments(): void {
        console.log('Comments released...');
    }
}
