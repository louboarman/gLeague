import { Component} from '@angular/core';
import { RoundService } from '../round.service';
import { HoleScoreService } from '../hole-score.service';
import { FilterPipe } from 'ngx-filter-pipe';
import { Match } from '../match';
import { Round } from '../round';
import { StatService } from '../stat.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})

export class MatchComponent {
  rounds: any[];
  holescores: any[];
  player1T1Advantage:number;
  player1T2Advantage:number;
  player2T1Advantage:number;
  player2T2Advantage:number;


  match: Match = {id:1, teamOne: 1, teamTwo: 2, playerT1P1RoundId:11, playerT1P2RoundId:31, playerT2P1RoundId:51,playerT2P2RoundId:71, dateplayed: new Date('4-30-2018'), completed:true};
  
  playerFilterT1P1: any = { id: this.match.playerT1P1RoundId };
  roundFilterT1P1: any = { roundid: this.match.playerT1P1RoundId };
  
  playerFilterT2P1: any = { id: this.match.playerT2P1RoundId };
  roundFilterT2P1: any = { roundid: this.match.playerT2P1RoundId };

  playerFilterT1P2: any = { id: this.match.playerT1P2RoundId };
  roundFilterT1P2: any = { roundid: this.match.playerT1P2RoundId };

  playerFilterT2P2: any = { id: this.match.playerT2P2RoundId };
  roundFilterT2P2: any = { roundid: this.match.playerT2P2RoundId };

  constructor(RoundSvc: RoundService, HoleSvc: HoleScoreService, StatSvc: StatService, private filterPipe: FilterPipe) { 
    this.rounds =RoundSvc.getRounds();
    this.holescores = HoleSvc.getHoleScoresForRound();
    this.player1T1Advantage = RoundSvc.getPlayerAdvantageForMatch(this.match.playerT1P1RoundId, this.match.playerT2P1RoundId);
    this.player1T2Advantage = RoundSvc.getPlayerAdvantageForMatch(this.match.playerT2P1RoundId, this.match.playerT1P1RoundId);
    this.player2T1Advantage = RoundSvc.getPlayerAdvantageForMatch(this.match.playerT1P2RoundId, this.match.playerT2P2RoundId);
    this.player2T2Advantage = RoundSvc.getPlayerAdvantageForMatch(this.match.playerT2P2RoundId, this.match.playerT1P2RoundId);
  }
 
 

}
