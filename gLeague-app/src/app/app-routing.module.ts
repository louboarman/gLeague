import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerRoundListComponent } from './player-round-list/player-round-list.component';
import { TestFilterComponent } from './test-filter/test-filter.component';
import { MatchComponent } from './match/match.component';

const routes: Routes = [
  { path: '',   redirectTo: '/match', pathMatch: 'full' },
  { path: 'players', component:PlayerListComponent},
  { path: 'rounds', component:PlayerRoundListComponent},
  { path: 'test', component:TestFilterComponent},
  { path: 'match', component:MatchComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
