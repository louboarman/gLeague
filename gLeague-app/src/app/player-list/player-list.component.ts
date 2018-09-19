import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent {

  private leagueplayers;
  players: Player[];

  constructor(PlaySvc: PlayerService) { 
    PlaySvc.getPlayers().subscribe(
      (data) => this.leagueplayers = data
    );
  }

}
