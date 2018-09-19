import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';

// services
import { PlayerService } from './player.service';

// pipes
import { RolePipe } from './role.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    RolePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    PlayerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
