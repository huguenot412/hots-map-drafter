import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'

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
import { TeamSummaryService } from './shared/team-summary.service';
import { ActiveDraftBoxService } from './shared/active-draft-box.service';
import { MyPicksComponent } from './my-picks/my-picks.component';
import { HomeComponent } from './home/home.component';
import { DraftComponent } from './draft/draft.component';
import { PicksPanelComponent } from './picks-panel/picks-panel.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'my-picks', component: MyPicksComponent},
  { path: 'draft', component: DraftComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    SelectedHeroComponent,
    NavbarComponent,
    DraftPanelComponent,
    TeamSummaryComponent,
    BattlegroundComponent,
    MyPicksComponent,
    HomeComponent,
    DraftComponent,
    PicksPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [
    HeroesDataService, 
    SelectedHeroService, 
    BattlegroundsService,
    ActiveDraftBoxService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
