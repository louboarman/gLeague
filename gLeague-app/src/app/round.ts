import { HoleScore } from "./hole-score";

export class Round {
    playerid: number;
    courseid: number;
    holes: HoleScore[];
    score: number;
    putts: number;

    constructor(playerid: number, courseid: number, holes: HoleScore[], score: number, putts: number){
        this.playerid= playerid;
        this.courseid = courseid;
        this.holes = holes;
        this.score = score;
        this.putts = putts;
    }
}
