import {Player, Vehicle} from "alt-client";
import alt from "alt-client";
import game from "natives";

export class DatabaseService {
    private static instance: DatabaseService;

    public static getInstance(): DatabaseService {
        if(!DatabaseService.instance){
            DatabaseService.instance = new DatabaseService();
        }
        return DatabaseService.instance;
    }

    private constructor() {}

    public connect(){

    }

    public getDatabase(){

    }
}