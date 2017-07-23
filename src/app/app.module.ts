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
import { BattlegroundsService } from './shared/battlegrounds.service';
import { DraftSelectionComponent } from './draft-selection/draft-selection.component';
import { TeamStatsComponent } from './team-stats/team-stats.component';
import { TeamSummaryService } from './shared/team-summary.service';
import { ActiveDraftBoxService } from './shared/active-draft-box.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    SelectedHeroComponent,
    NavbarComponent,
    DraftPanelComponent,
    TeamSummaryComponent,
    BattlegroundComponent,
    DraftSelectionComponent,
    TeamStatsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    HeroesDataService, 
    SelectedHeroService, 
    BattlegroundsService,
    ActiveDraftBoxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
