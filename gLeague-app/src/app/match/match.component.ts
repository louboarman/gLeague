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
  
  match: Match = {id:1, teamOne: 1, teamTwo: 2, playerT1P1RoundId:1, playerT1P2RoundId:5, playerT2P1RoundId:3,playerT2P2RoundId:7, dateplayed: new Date('4-30-2018'), completed:true};
  
  
  playerFilterT1P1: any = { id: 1 };
  roundFilterT1P1: any = { roundid: 1 };

  playerFilterT2P1: any = { id: 5 };
  roundFilterT2P1: any = { roundid: 5 };

  playerFilterT1P2: any = { id: 3 };
  roundFilterT1P2: any = { roundid: 3 };

  playerFilterT2P2: any = { id: 7 };
  roundFilterT2P2: any = { roundid: 7 };

 
  constructor(RoundSvc: RoundService, HoleSvc: HoleScoreService, private filterPipe: FilterPipe) { 
    this.rounds =RoundSvc.getRounds();
    this.holescores = HoleSvc.getHoleScoresForRound();
  }

}
