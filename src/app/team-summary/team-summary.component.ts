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
  styleUrls: ['./team-summary.component.css'],
  providers: [TeamSummaryService]
})
export class TeamSummaryComponent implements OnInit {
  
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

    //When hovering over heroes...
    this.selectedHeroService.selectedHero.subscribe(
      (hero: object) => {
        if(this.teamSummaryService.activeDraftBox.isActive) {
          if(this.teamSummaryService.activeDraftBox.hero.name) { 
            this.teamSummaryService.activeDraftBox.previous = this.teamSummaryService.activeDraftBox.hero 
          };
          this.teamSummaryService.activeDraftBox.hero = hero;
          if(this.teamSummaryService.activeDraftBox.previous) {
            this.teamStats.global -= this.teamSummaryService.activeDraftBox.previous.global;
            this.teamStats.waveClear -= this.teamSummaryService.activeDraftBox.previous.waveClear;
            // this.teamStats.pointControl -= this.teamSummaryService.activeDraftBox.previous.pointControl;
            // this.teamStats.mercs -= this.teamSummaryService.activeDraftBox.previous.mercs;
          }
          this.teamStats.global += this.teamSummaryService.activeDraftBox.hero.global;
          this.teamStats.waveClear += this.teamSummaryService.activeDraftBox.hero.waveClear;
          // this.teamStats.pointControl -= this.teamSummaryService.activeDraftBox.previous.pointControl;
          // this.teamStats.mercs -= this.teamSummaryService.activeDraftBox.previous.mercs;
        }
      }
    );
  }

  onSelectDraftBox(draftBox) {
    this.teamSummaryService.selectActiveDraftBox(draftBox);
  }

 draftBoxes = [
    {
      hero: {},
      isActive: false
    },
    {
      hero: {},
      isActive: false
    },
    {
      hero: {},
      isActive: false
    },
    {
      hero: {},
      isActive: false
    },
    {
      hero: {},
      isActive: false
    }
  ];

}
