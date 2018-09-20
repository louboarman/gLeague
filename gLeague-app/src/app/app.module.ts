import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


// components
import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerRoundListComponent } from './player-round-list/player-round-list.component';

// services
import { PlayerService } from './player.service';
import { RoundService } from './round.service';

// pipes
import { RolePipe } from './role.pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';


@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    RolePipe,
    PlayerRoundListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FilterPipeModule,
  ],
  providers: [
    PlayerService,
    RoundService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
