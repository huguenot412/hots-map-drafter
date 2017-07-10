import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesDataService } from './shared/heroes-data.service';
import { SelectedHeroComponent } from './selected-hero/selected-hero.component';
import { SelectedHeroService } from './shared/selected-hero.service';
import { NavbarComponent } from './navbar/navbar.component';
import { DraftPanelComponent } from './draft-panel/draft-panel.component';
import { TeamSummaryComponent } from './team-summary/team-summary.component';
import { BattlegroundComponent } from './battleground/battleground.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    SelectedHeroComponent,
    NavbarComponent,
    DraftPanelComponent,
    TeamSummaryComponent,
    BattlegroundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [HeroesDataService, SelectedHeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
