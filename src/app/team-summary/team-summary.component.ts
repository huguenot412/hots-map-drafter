import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';

import { BattlegroundComponent } from '../battleground/battleground.component';
import { DraftSelectionComponent } from '../draft-selection/draft-selection.component';
import { TeamStatsComponent } from '../team-stats/team-stats.component';
import { TeamSummaryService } from '../shared/team-summary.service';
import { SelectedHeroService } from '../shared/selected-hero.service';
import { BattlegroundsService } from '../shared/battlegrounds.service';

@Component({
  selector: 'app-team-summary',
  templateUrl: './team-summary.component.html',
  styleUrls: ['./team-summary.component.css']
})
export class TeamSummaryComponent implements OnInit {

  activeDraftBox
  highlightedHero
  previouslyHighlighted
  mapStats
  meterBoxes = [1,2,3,4,5,6,7,8,9,10]
  teamStats = {
    global: 0,
    waveClear: 0,
    pointControl: 0,
    mercs: 0
  }
  
  statMeters = [
    {name: "Wave Clear", ref: "waveClear"},
    {name: "Global", ref: "global"},
    {name: "Point Control", ref: "pointControl"},
    {name: "Mercenaries", ref: "mercs"}
  ]

  constructor( private teamSummaryService: TeamSummaryService,
               private battlegroundsService: BattlegroundsService,
               private selectedHeroService: SelectedHeroService ) { }

  ngOnInit() { 

    this.activeDraftBox = this.draftBoxes[0];

    // !!! Need to figure out how to make this dynamic by initializing properly
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
        let team = this.teamStats;
        if(this.activeDraftBox.isActive) {
          if(this.activeDraftBox.hero.name) { this.activeDraftBox.previous = this.activeDraftBox.hero };
          this.activeDraftBox.hero = hero;
          if(this.activeDraftBox.previous) {
            team.global -= this.activeDraftBox.previous.global;
            team.waveClear -= this.activeDraftBox.previous.waveClear;
          }
          team.global += this.activeDraftBox.hero.global;
          team.waveClear += this.activeDraftBox.hero.waveClear;
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

 draftBoxes = [
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

}
