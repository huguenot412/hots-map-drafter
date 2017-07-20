import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';

import { TeamSummaryComponent } from '../team-summary/team-summary.component';
import { BattlegroundComponent } from '../battleground/battleground.component';
import { DraftSelectionComponent } from '../draft-selection/draft-selection.component';
import { TeamStatsComponent } from '../team-stats/team-stats.component';
import { TeamSummaryService } from '../shared/team-summary.service';
import { SelectedHeroService } from '../shared/selected-hero.service';
import { BattlegroundsService } from '../shared/battlegrounds.service';

@Component({
  selector: 'app-draft-panel',
  templateUrl: './draft-panel.component.html',
  styleUrls: ['./draft-panel.component.css']
})
export class DraftPanelComponent implements OnInit {

  activeDraftBox
  highlightedHero
  previouslyHighlighted

  blueTeamStats = {
    global: 0,
    waveClear: 0,
    pointControl: 0,
    mercs: 0
  }

  redTeamStats = {
    global: 0,
    waveClear: 0,
    pointControl: 0,
    mercs: 0
  }

  mapStats

  constructor( private teamSummaryService: TeamSummaryService,
               private battlegroundsService: BattlegroundsService,
               private selectedHeroService: SelectedHeroService ) { }

  ngOnInit() { 

    this.activeDraftBox = this.blueDraftBoxes[0];

    this.mapStats = {
      "name": "Battlefield of Eternity",
      "imgURL": "battlefield-of-eternity",
      "global": 5,
      "waveClear": 7
    }

    this.battlegroundsService.displayedBattleground.subscribe(
      (battleground: object) => {
        this.mapStats = battleground;
      }
    );
    //When hovering over heroes...

    this.selectedHeroService.selectedHero.subscribe(
      (hero: object) => {
        let team
        if(this.activeDraftBox.team === "blue") {
          team = this.blueTeamStats;
        } else {
          team = this.redTeamStats;
        }
        if(this.activeDraftBox.isActive) {
          if(this.activeDraftBox.hero.name) { this.activeDraftBox.previous = this.activeDraftBox.hero };
          this.activeDraftBox.hero = hero;
          if(this.activeDraftBox.previous) {
            team.global -= this.activeDraftBox.previous.global;
            team.waveClear -= this.activeDraftBox.previous.waveClear;
          }
          team.global += this.activeDraftBox.hero.global;
          team.waveClear += this.activeDraftBox.hero.waveClear;
          console.log(this.activeDraftBox.hero.waveClear);
          console.log(team.waveClear);
        }
      }
    );

    //When you click on selected hero they are locked in to the draft box
    this.selectedHeroService.draftedHero.subscribe(  
      (hero: object) => {
        this.activeDraftBox.isActive = false;
        this.activeDraftBox.previous = null;
      });
  }

  onSelectDraftBox(draftBox) {
    this.selectedHeroService.selectedHero.takeUntil(this.selectedHeroService.draftedHero).subscribe(  
      (hero: object) => {
        this.activeDraftBox.hero = hero;
      });
    if(this.activeDraftBox.isActive) {
      this.activeDraftBox.isActive = false;
    }
    this.activeDraftBox = draftBox;
    draftBox.isActive = true;
  }

  blueDraftBoxes = [
    {
      hero: {},
      isActive: false,
      team: "blue"
    },
    {
      hero: {},
      isActive: false,
      team: "blue"
    },
    {
      hero: {},
      isActive: false,
      team: "blue"
    },
    {
      hero: {},
      isActive: false,
      team: "blue"
    },
    {
      hero: {},
      isActive: false,
      team: "blue"
    }
  ];

  redDraftBoxes = [
    {
      hero: {},
      isActive: false,
      team: "red"
    },
    {
      hero: {},
      isActive: false,
      team: "red"
    },
    {
      hero: {},
      isActive: false,
      team: "red"
    },
    {
      hero: {},
      isActive: false,
      team: "red"
    },
    {
      hero: {},
      isActive: false,
      team: "red"
    }
  ];

}
