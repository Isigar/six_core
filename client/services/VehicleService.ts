import {Player, Vehicle} from "alt-client";
import alt from "alt-client";
import game from "natives";

export class VehicleService {
    private static instance: VehicleService;

    public static getInstance(): VehicleService {
        if(!VehicleService.instance){
            VehicleService.instance = new VehicleService();
        }
        return VehicleService.instance;
    }

    private constructor() {
    }

    setPedToVehicle(ped: number, vehicle: Vehicle, seat: number = -1) {
        game.setPedIntoVehicle(ped, vehicle.scriptID, seat);
    }
}