import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'; 

import { SelectedHeroService } from './selected-hero.service';

@Injectable()
export class ActiveDraftBoxService {

activeDraftBox
updateActiveDraftBox = new Subject();

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
  // calculateMeters(teamStats, statMeters){
  //   this.selectedHeroService.selectedHero.subscribe(
  //     (hero: object) => {
  //       if(this.activeDraftBox.isActive) {
  //         if(this.activeDraftBox.hero.name) { 
  //           this.activeDraftBox.previous = this.activeDraftBox.hero 
  //         };
  //         this.activeDraftBox.hero = hero;
  //         if(this.activeDraftBox.previous) {
  //           teamStats.global -= this.activeDraftBox.previous.global;
  //           teamStats.waveClear -= this.activeDraftBox.previous.waveClear;
  //           teamStats.pointControl -= this.activeDraftBox.previous.pointControl;
  //           teamStats.mercs -= this.activeDraftBox.previous.mercs;
  //         }
  //         // statMeters.forEach(function(stat){
  //         //   teamStats[stat.ref] += this.activeDraftBox.hero[stat.ref]
  //         // })
  //         teamStats.global += this.activeDraftBox.hero.global;
  //         teamStats.waveClear += this.activeDraftBox.hero.waveClear;
  //         teamStats.pointControl += this.activeDraftBox.hero.pointControl;
  //         teamStats.mercs += this.activeDraftBox.hero.mercs;
  //         // console.log(`Team Stats:${teamStats.global}, Hero Global: ${this.activeDraftBox.hero.global}`);
  //       }
  //     }
  //   );
  // }

  // selectActiveDraftBox(draftBox, draftBoxes) {
  //   this.selectedHeroService.selectedHero.takeUntil(this.selectedHeroService.draftedHero).subscribe(  
  //     (hero: object) => {
  //       // draftBoxes.forEach(function(box){
  //       //   box.isActive = false;
  //       // });
  //       this.activeDraftBox.hero = hero;
  //     });
  //   if(this.activeDraftBox.isActive) {
  //     this.activeDraftBox.isActive = false;
  //   }
  //   this.activeDraftBox = draftBox;
  //   draftBox.isActive = true;
  //   this.activeDraft.next(draftBox);
  // } 
  
  

}
