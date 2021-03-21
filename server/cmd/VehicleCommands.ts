import * as alt from 'alt-server';

// @ts-ignore
import { registerCommand } from 'chat';
// @ts-ignore
import { sendShow } from 'notifications';
import {CmdService} from "./CmdService";

export class VehicleCommands {
    cmdService: CmdService;

    constructor(commandService: CmdService) {
        this.cmdService = commandService;

        this.cmdService.registerCommand('vehicle', (player, model) => {
            alt.log('Create vehicle!');
            try{
                const veh = new alt.Vehicle(`${model}`, player.pos.x, player.pos.y, player.pos.z, 0, 0,0);
                alt.emitClient(player, 'vehicle:warpInto', veh)
            }catch (e){
                alt.log('Cannot create vehicle!')
                sendShow(player, 'Vehicle cannot be spawned, are u sure that u write good model?');
            }

            sendShow(player, 'Vehicle is spawned!')
        }, 1, 'Spawn test networked vehicle', '/vehicle [model]');
    }
}