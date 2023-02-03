import IPlatform from "./platforms/IPlatform";
import Live from "./transmissions/Live";
import YoutTube from "./platforms/YoutTube";
import Twitch from "./platforms/Twitch";
import AdvancedLive from "./transmissions/AdvancedLive";

function startLive(platform: IPlatform) {
    console.log('just a moment....');

    const live = new Live(platform);
    live.broadcasting();
    live.result();
}

function startAdvancedLive(platform: IPlatform) {
    console.log('just a moment....');

    const live = new AdvancedLive(platform);
    live.broadcasting();
    live.result();
    live.comments();
    live.subtitles();
}

startLive(new YoutTube());
startLive(new Twitch());
startAdvancedLive(new YoutTube());
startAdvancedLive(new Twitch());
