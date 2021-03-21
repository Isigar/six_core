import * as alt from 'alt-server';
import {VehicleCommands} from "./VehicleCommands";
// @ts-ignore
import {registerCommand} from "chat";

export class CmdService {
    constructor() {
        const vehicleCmd = new VehicleCommands(this);
    }

    registerCommand(cmd: string, cb: any, hasArguments: number, desc: string|null, usage: string|null) {
        registerCommand(cmd, cb, hasArguments, desc, usage = undefined)
    }
}