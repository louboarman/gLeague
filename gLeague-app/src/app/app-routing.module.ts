import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerRoundListComponent } from './player-round-list/player-round-list.component';

const routes: Routes = [
  { path: '',   redirectTo: '/players', pathMatch: 'full' },
  { path: 'players', component:PlayerListComponent},
  { path: 'rounds', component:PlayerRoundListComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
