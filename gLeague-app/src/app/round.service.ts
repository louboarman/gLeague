import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';
import { ROUNDS } from './mock-rounds';
import { Round } from './round';

@Injectable({
  providedIn: 'root'
})
export class RoundService {

  round: Round;
  p1Round: number;
  p2Round: number;

  constructor(private http: HttpClient) { }

  getRounds(){
    return ROUNDS;
  }

  getMatchHdcpForRound(id):number{
    this.round  = ROUNDS.find(i => i.id === id);
    return this.round.matchhdcp;
  }

  public getPlayerAdvantageForMatch(playerRoundID, opponentRoundID):number{
    this.p1Round= this.getMatchHdcpForRound(playerRoundID);
    this.p2Round= this.getMatchHdcpForRound(opponentRoundID);
    let advantage = (this.p1Round) - this.p2Round;
    if (advantage < 0) {
       return 0;
       } else{
         return advantage;
       }
     }
}
