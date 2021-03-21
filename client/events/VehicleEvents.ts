import {EventService} from "./EventService";
import * as alt from 'alt-client'
import game from "natives";
import {Vehicle} from "alt-client";
import {VehicleService} from "../services/VehicleService";

export class VehicleEvents {
    eventService: EventService;
    vehicleService: VehicleService;

    constructor(eventService: EventService) {
        this.eventService = eventService;
        this.vehicleService = VehicleService.getInstance();

        alt.onServer('vehicle:warpInto', (vehicle: Vehicle, seat: number = -1) => {
            alt.setTimeout(() => {
                if(vehicle.scriptID !== 0){
                    this.vehicleService.setPedToVehicle(alt.Player.local.scriptID, vehicle, seat);
                } else {
                    alt.log('Cannot teleport player to vehicle, 500ms not enogh...')
                }
            }, 500)
        })
    }

}