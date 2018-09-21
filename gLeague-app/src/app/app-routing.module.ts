import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerRoundListComponent } from './player-round-list/player-round-list.component';
import { TestFilterComponent } from './test-filter/test-filter.component';

const routes: Routes = [
  { path: '',   redirectTo: '/rounds', pathMatch: 'full' },
  { path: 'players', component:PlayerListComponent},
  { path: 'rounds', component:PlayerRoundListComponent},
  { path: 'test', component:TestFilterComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
