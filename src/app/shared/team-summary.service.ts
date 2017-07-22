import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { SelectedHeroService } from './selected-hero.service';
import { BattlegroundsService } from './battlegrounds.service';

@Injectable()
export class TeamSummaryService {

  activeDraftBox
  mapStats

  constructor( private selectedHeroService: SelectedHeroService,
               private battlegroundsService: BattlegroundsService ) { 

    this.activeDraftBox = {
      hero: {},
      isActive: false,
    };

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

    this.selectedHeroService.draftedHero.subscribe(  
      (hero: object) => {
        this.activeDraftBox.isActive = false;
        this.activeDraftBox.previous = null;
      });

  }

  selectActiveDraftBox(draftBox) {
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
 
}


