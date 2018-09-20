import { Component, OnInit } from '@angular/core';
import { Round } from '../round';
import { Player } from '../player';
import { RoundService } from '../round.service';
import { FilterPipe } from 'ngx-filter-pipe';

const filter = {$or: 1};

@Component({
  selector: 'app-player-round-list',
  templateUrl: './player-round-list.component.html',
  styleUrls: ['./player-round-list.component.css']
})

export class PlayerRoundListComponent {

  rounds: Round[];
  userFilter: any = { playerid: 0 };

  constructor(RoundSvc: RoundService, private filterPipe: FilterPipe) { 
    // PlaySvc.getPlayers().subscribe(
    //   (data) => this.leagueplayers = data
    // );
    this.rounds = filterPipe.transform(RoundSvc.getRounds(), {playerid: 2});
  }

}
