import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/Rx';

import { BattlegroundComponent } from '../battleground/battleground.component';
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
  teamStats
  @Input() teamName: string

  
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
    this.teamStats = {
      global: 0,
      waveClear: 0,
      pointControl: 0,
      mercs: 0
    }

    this.teamSummaryService.calculateMeters(this.teamName);

  }

 draftBoxes = [
    {
      hero: {},
      isActive: false,
      team: this.teamName
    },
    {
      hero: {},
      isActive: false,
      team: this.teamName
    },
    {
      hero: {},
      isActive: false,
      team: this.teamName
    },
    {
      hero: {},
      isActive: false,
      team: this.teamName
    },
    {
      hero: {},
      isActive: false,
      team: this.teamName
    }
  ];

}
