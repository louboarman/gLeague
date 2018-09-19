import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  private leagueplayers;
  players: Player[];

  constructor(private PlaySvc: PlayerService) { }


  ngOnInit() {
     this.PlaySvc.getPlayers().subscribe(
       (data) => this.leagueplayers = data
     );
  }

}
