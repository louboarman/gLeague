import { HoleScore } from "./hole-score";
import {HoleScoreService } from "./hole-score.service";

export class Round {
    id: number;
    playerid: number;
    playername: string;
    dateplayed: Date;
    courseid: number;
    teeid: number;
    nine: number;
    score: number;
    netscore: number;
    putts: number;

    constructor(HoleSvc: HoleScoreService){}
}
