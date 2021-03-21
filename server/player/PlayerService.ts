import alt, {Player} from "alt-server";

export class PlayerService {
    deadPlayers = {};

    /**
     * Hookup events
     */
    constructor() {
        alt.on('playerConnect', (player: Player) => {
            player.model = `mp_m_freemode_01`;
            player.spawn(-1291.71, 83.43, 54.89, 1000);
            alt.log(`Player ${player.name} (${player.ip}) connecting to server!`)

            alt.emitClient(player, 'player:spawned');
        });

        alt.on('playerDeath', (player: Player) => {
            if(this.deadPlayers[player.id]){
                //Already dead
                return;
            }

            this.deadPlayers[player.id] = {
                time: alt.getNetTime(),
            }
        });
    }

    isPlayerDead(playerId: number) {
        return this.deadPlayers[playerId];
    }

    getDeadPlayers(){
        return this.deadPlayers;
    }
}