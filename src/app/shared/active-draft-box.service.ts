import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'; 

import { SelectedHeroService } from './selected-hero.service';

@Injectable()
export class ActiveDraftBoxService {

activeDraftBox
activeDraft = new Subject();

  constructor( private selectedHeroService: SelectedHeroService ) {
    this.activeDraftBox = {
      hero: {},
      isActive: false,
      previous: null
    };

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
