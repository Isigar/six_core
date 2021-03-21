import * as alt from 'alt-server';
import {Player} from "alt-server";
import {timeSync} from "./timeSync";
import {CmdService} from "./cmd/CmdService";
import {PlayerService} from "./player/PlayerService";

const playerService = new PlayerService();

//Register commands
const cmd = new CmdService();

//Player time synchronization
const tSync = new timeSync();
tSync.startTimeSync();