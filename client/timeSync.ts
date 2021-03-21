import * as alt from 'alt-client';
import * as native from 'natives';

export class timeSync {
    constructor() {
        alt.onServer('syncTime', (time) => {
            native.setClockTime(time.hour, time.minute, 0)
            alt.log(`Sync time ${time.hour}:${time.minute}`)
        })
    }
}