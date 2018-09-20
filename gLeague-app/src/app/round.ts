import { HoleScore } from "./hole-score";

export class Round {
    id: number;
    playerid: number;
    dateplayed: Date;
    courseid: number;
    teeid: number;
    nine: number;
    score: number;
    netscore: number;
    putts: number;

    constructor(id: number, playerid: number, dateplayed: Date, courseid: number, teeid: number, score: number, netscore: number, putts: number){
        this.id = id;
        this.playerid= playerid;
        this.dateplayed = dateplayed;
        this.courseid = courseid;
        this.teeid = teeid
        this.score = score;
        this.netscore = netscore;
        this.putts = putts;
    }
}
