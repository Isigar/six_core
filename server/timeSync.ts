import * as alt from 'alt-server';
import {Player} from "alt-server";

export class timeSync {
    msPerMinute: number = 1000;

    currentTimeHour = 6
    currentTimeMinute = 0

    constructor() {
        alt.on('playerConnect', (player: Player) => {
            //Wait 2 seconds after connect and then sync time & weather
            setTimeout(() => {
                this.syncTime(player);
            }, 2000)
        })
    }

    syncTime(player) {
        alt.emitClient(player, 'syncTime', this.getCurrentTime())
    }

    /**
     * Return current time sync
     */
    getCurrentTime() {
        return {
            hour: this.currentTimeHour,
            minute: this.currentTimeMinute,
        }
    }

    /**
     * Set time
     * @param hour
     * @param minute
     * @param waitToUpdate
     */
    setTime(hour: number, minute: number, waitToUpdate: boolean = false) {
        this.currentTimeMinute = hour;
        this.currentTimeMinute = minute;
        if (waitToUpdate === false) {
            alt.Player.all.forEach((player) => {
                this.syncTime(player);
            })
        }
    }

    startTimeSync() {
        alt.log('Start time syncing!');

        let timeInterval = setInterval(() => {
            if ((this.currentTimeMinute + 1) < 60) {
                this.currentTimeMinute += 1;
            } else {
                this.currentTimeMinute = 0;
                if (this.currentTimeHour + 1 < 24) {
                    this.currentTimeHour += 1;
                } else {
                    this.currentTimeHour = 0;
                }
            }
        }, this.msPerMinute)

        let syncTimeInterval = setInterval(() => {
            alt.Player.all.forEach((player) => {
                this.syncTime(player);
            })
        }, 1000 * 60 * 2)
    }
}