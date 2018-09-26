import { Round } from './round';
import {HoleScoreService } from "./hole-score.service";
HoleSvc: HoleScoreService;


export const ROUNDS: Round[] = [
  { id: 11, playerid: 1, playername: 'Lou Bo', dateplayed: new Date("4-30-2018"), courseid: 1, matchhdcp: 2, teeid: 2, nine: 1, score: 36, netscore: 34, putts:18},
  { id: 21, playerid: 1, playername: 'Lou Bo',  dateplayed: new Date("5-06-2018"), courseid: 1, matchhdcp: 2, teeid: 1, nine: 2, score: 37, netscore: 35, putts:18},
  { id: 51, playerid: 2, playername: 'Walt La',  dateplayed: new Date("4-30-2018"), courseid: 1, matchhdcp: 4, teeid: 2, nine: 1, score: 39, netscore: 35, putts:19},
  { id: 61, playerid: 2, playername: 'Walt La',  dateplayed: new Date("5-16-2018"), courseid: 1, matchhdcp: 5, teeid: 1, nine: 2, score: 47, netscore: 36, putts:17},
  { id: 31, playerid: 3, playername: 'Dave Ma',  dateplayed: new Date("4-30-2018"), courseid: 1, matchhdcp: 12, teeid: 2, nine: 1, score: 38, netscore: 36, putts:18},
  { id: 41, playerid: 3, playername: 'Dave Ma',  dateplayed: new Date("5-06-2018"), courseid: 1, matchhdcp: 12, teeid: 1, nine: 2, score: 39, netscore: 37, putts:18},
  { id: 71, playerid: 4, playername: 'Steve Pr',  dateplayed: new Date("4-30-2018"), courseid: 1, matchhdcp: 7, teeid: 2, nine: 1, score: 48, netscore: 37, putts:19},
  { id: 81, playerid: 4, playername: 'Steve Pr',  dateplayed: new Date("5-16-2018"), courseid: 1, matchhdcp: 8, teeid: 1, nine: 2, score: 49, netscore: 38, putts:16}
];



