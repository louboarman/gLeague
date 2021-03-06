import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


// components
import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerRoundListComponent } from './player-round-list/player-round-list.component';
import { TestFilterComponent } from './test-filter/test-filter.component';
import { MatchComponent } from './match/match.component';

// services
import { PlayerService } from './player.service';
import { RoundService } from './round.service';

// pipes
import { RolePipe } from './role.pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { StrokeadvantagePipe } from './strokeadvantage.pipe';
import { HolewonPipe } from './holewon.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    RolePipe,
    PlayerRoundListComponent,
    TestFilterComponent,
    MatchComponent,
    StrokeadvantagePipe,
    HolewonPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FilterPipeModule,
    FormsModule,
  ],
  providers: [
    PlayerService,
    RoundService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
