import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { SelectedHeroService } from './selected-hero.service';
import { BattlegroundsService } from './battlegrounds.service';
import { ActiveDraftBoxService } from './active-draft-box.service';

@Injectable()
export class TeamSummaryService {

  activeDraftBox
  mapStats

  constructor( private selectedHeroService: SelectedHeroService,
               private battlegroundsService: BattlegroundsService,
               private activeDraftBoxService: ActiveDraftBoxService ) { 

    // this.activeDraftBox = {
    //   hero: {},
    //   isActive: false,
    // };

    // !!! Need to figure out how to make this dynamic by initializing properly
    this.mapStats = {
      "name": "Battlefield of Eternity",
      "imgURL": "battlefield-of-eternity",
      "global": 5,
      "waveClear": 7,
      "pointControl": 7,
      "mercs": 4
    }

    this.battlegroundsService.displayedBattleground.subscribe(
      (battleground: object) => {
        this.mapStats = battleground;
      }
    );

    // this.selectedHeroService.draftedHero.subscribe(  
    //   (hero: object) => {
    //     this.activeDraftBox.isActive = false;
    //     this.activeDraftBox.previous = null;
    //   });

  }

  selectActiveDraftBox(draftBox) {
    
    this.selectedHeroService.selectedHero.takeUntil(this.selectedHeroService.draftedHero).subscribe(  
      (hero: object) => {
        this.activeDraftBoxService.activeDraftBox.hero = hero;
      });
    if(this.activeDraftBoxService.activeDraftBox.isActive) {
      this.activeDraftBoxService.activeDraftBox.isActive = false;
    }
    this.activeDraftBoxService.activeDraftBox = draftBox;
    draftBox.isActive = true;
    this.activeDraftBoxService.activeDraft.next(draftBox);
  }
 
}


