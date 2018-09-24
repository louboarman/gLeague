import { Component} from '@angular/core';
import { RoundService } from '../round.service';
import { HoleScoreService } from '../hole-score.service';
import { FilterPipe } from 'ngx-filter-pipe';
import { Match } from '../match';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})

export class MatchComponent {
  rounds: any[];
  holescores: any[];
  
  match: Match = {id:1, teamOne: 1, teamTwo: 2, playerT1P1RoundId:1, playerT1P2RoundId:3, playerT2P1RoundId:5,playerT2P2RoundId:7, dateplayed: new Date('4-30-2018'), completed:true};
  
  
  playerFilterT1P1: any = { id: this.match.playerT1P1RoundId };
  roundFilterT1P1: any = { roundid: this.match.playerT1P1RoundId };

  playerFilterT2P1: any = { id: this.match.playerT2P1RoundId };
  roundFilterT2P1: any = { roundid: this.match.playerT2P1RoundId };

  playerFilterT1P2: any = { id: this.match.playerT1P2RoundId };
  roundFilterT1P2: any = { roundid: this.match.playerT1P2RoundId };

  playerFilterT2P2: any = { id: this.match.playerT2P2RoundId };
  roundFilterT2P2: any = { roundid: this.match.playerT2P2RoundId };

 
  constructor(RoundSvc: RoundService, HoleSvc: HoleScoreService, private filterPipe: FilterPipe) { 
    this.rounds =RoundSvc.getRounds();
    this.holescores = HoleSvc.getHoleScoresForRound();
  }

  getPlayerAdvantage(playerRoundId:number, OpponentRoundId:number, holeNumber: number){
    return 3;
  }

}
