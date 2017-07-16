import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';

import { TeamSummaryComponent } from '../team-summary/team-summary.component';
import { BattlegroundComponent } from '../battleground/battleground.component';
import { DraftSelectionComponent } from '../draft-selection/draft-selection.component';
import { TeamStatsComponent } from '../team-stats/team-stats.component';
import { TeamSummaryService } from '../shared/team-summary.service';
import { SelectedHeroService } from '../shared/selected-hero.service';

@Component({
  selector: 'app-draft-panel',
  templateUrl: './draft-panel.component.html',
  styleUrls: ['./draft-panel.component.css']
})
export class DraftPanelComponent implements OnInit {

  activeDraftBox = {isActive: false, hero: {}}

  constructor( private teamSummaryService: TeamSummaryService,
               private selectedHeroService: SelectedHeroService ) { }

  ngOnInit() { 
    // this.selectedHeroService.selectedHero.subscribe(  
    //   (hero: object) => {
    //     this.activeDraftBox.hero = hero;
    //   });

    this.selectedHeroService.draftedHero.subscribe(  
      (hero: object) => {
        this.activeDraftBox.isActive = false;
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

  redDraftBoxes = [
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
