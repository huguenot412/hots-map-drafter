import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { SelectedHeroService } from './selected-hero.service';
import { BattlegroundsService } from './battlegrounds.service';
import { ActiveDraftBoxService } from './active-draft-box.service';

@Injectable()
export class TeamSummaryService {

  activeDraftBox
  mapStats
  teamStats

  constructor( private selectedHeroService: SelectedHeroService,
               private battlegroundsService: BattlegroundsService,
               private activeDraftBoxService: ActiveDraftBoxService ) { 
    
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

    this.selectedHeroService.draftedHero.subscribe(  
      (hero: object) => {
        this.activeDraftBox.isActive = false;
        this.activeDraftBox.previous = null;
      });
  }

  calculateMeters(teamStats){
    this.selectedHeroService.selectedHero.subscribe(
      (hero: object) => {
        if(this.activeDraftBox.isActive) {
          if(this.activeDraftBox.hero.name) { 
            this.activeDraftBox.previous = this.activeDraftBox.hero 
          };
          this.activeDraftBox.hero = hero;
          if(this.activeDraftBox.previous) {
            teamStats.global -= this.activeDraftBox.previous.global;
            teamStats.waveClear -= this.activeDraftBox.previous.waveClear;
            teamStats.pointControl -= this.activeDraftBox.previous.pointControl;
            teamStats.mercs -= this.activeDraftBox.previous.mercs;
          }
          teamStats.global += this.activeDraftBox.hero.global;
          teamStats.waveClear += this.activeDraftBox.hero.waveClear;
          teamStats.pointControl += this.activeDraftBox.hero.pointControl;
          teamStats.mercs += this.activeDraftBox.hero.mercs;
          // console.log(`Team Stats:${teamStats.global}, Hero Global: ${this.activeDraftBox.hero.global}`);
        }
      }
    );   
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
    this.activeDraftBoxService.activeDraft.next(draftBox);
  } 
}


