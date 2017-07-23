import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';

import { BattlegroundComponent } from '../battleground/battleground.component';
import { DraftSelectionComponent } from '../draft-selection/draft-selection.component';
import { TeamStatsComponent } from '../team-stats/team-stats.component';
import { TeamSummaryService } from '../shared/team-summary.service';
import { SelectedHeroService } from '../shared/selected-hero.service';
import { BattlegroundsService } from '../shared/battlegrounds.service';
import { ActiveDraftBoxService } from '../shared/active-draft-box.service';

@Component({
  selector: 'app-team-summary',
  templateUrl: './team-summary.component.html',
  styleUrls: ['./team-summary.component.css'],
  providers: [TeamSummaryService]
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
               private selectedHeroService: SelectedHeroService,
               private activeDraftBoxService: ActiveDraftBoxService ) { }

  ngOnInit() { 

    this.activeDraftBoxService.activeDraft.subscribe(
      (draftBox) => {
        this.activeDraftBox = this.activeDraftBoxService.activeDraftBox;
      }
    )

    //When hovering over heroes...
    this.selectedHeroService.selectedHero.subscribe(
      (hero: object) => {
        if(this.activeDraftBox.isActive) {
          if(this.activeDraftBox.hero.name) { 
            this.activeDraftBoxService.activeDraftBox.previous = this.activeDraftBoxService.activeDraftBox.hero 
          };
          this.activeDraftBox.hero = hero;
          if(this.activeDraftBox.previous) {
            this.teamStats.global -= this.activeDraftBox.previous.global;
            this.teamStats.waveClear -= this.activeDraftBox.previous.waveClear;
            this.teamStats.pointControl -= this.activeDraftBox.previous.pointControl;
            this.teamStats.mercs -= this.activeDraftBox.previous.mercs;
          }
          this.teamStats.global += this.activeDraftBox.hero.global;
          this.teamStats.waveClear += this.activeDraftBox.hero.waveClear;
          this.teamStats.pointControl += this.activeDraftBox.hero.pointControl;
          this.teamStats.mercs += this.activeDraftBox.hero.mercs;
        }
      }
    );
  }

  // onSelectDraftBox(draftBox) {
  //   this.teamSummaryService.selectActiveDraftBox(draftBox);
  // }

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
