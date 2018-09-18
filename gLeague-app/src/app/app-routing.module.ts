import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayerListComponent } from './player-list/player-list.component';

const routes: Routes = [
  { path: '',   redirectTo: '/admin', pathMatch: 'full' },
  { path: 'admin', component:PlayerListComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
