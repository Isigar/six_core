import {VehicleEvents} from "./VehicleEvents";
import {PlayerEvents} from "./PlayerEvents";

export class EventService {
    constructor() {
        new VehicleEvents(this);
        new PlayerEvents(this);
    }
}