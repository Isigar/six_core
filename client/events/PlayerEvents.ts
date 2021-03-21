import {EventService} from "./EventService";
import * as alt from 'alt-client'
import game from "natives";

export class PlayerEvents {
    eventService: EventService;

    constructor(eventService: EventService) {
        this.eventService = eventService;

        alt.onServer('player:spawned', () => {
            alt.setTimeout(() => {
                alt.log('Player spawned!')

                let ped = alt.Player.local.scriptID;
                game.setPedRandomComponentVariation(ped, 0);
            }, 100)
        })
    }

}