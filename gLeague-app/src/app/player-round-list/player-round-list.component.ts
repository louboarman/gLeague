import { Component} from '@angular/core';
import { RoundService } from '../round.service';
import { HoleScoreService } from '../hole-score.service';
import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'app-player-round-list',
  templateUrl: './player-round-list.component.html',
  styleUrls: ['./player-round-list.component.css']
})

export class PlayerRoundListComponent {
  rounds: any[];
  holescores: any[];
  playerid = 1;
  playerFilter: any = { playerid: '' };
  roundid = 1;
  roundFilter: any = { roundid: '' };

  constructor(RoundSvc: RoundService, HoleSvc: HoleScoreService, private filterPipe: FilterPipe) { 
    this.rounds =RoundSvc.getRounds();
    this.holescores = HoleSvc.getHoleScoresForRound();
  }

}
