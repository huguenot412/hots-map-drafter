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
  context

  constructor( private selectedHeroService: SelectedHeroService,
               private battlegroundsService: BattlegroundsService,
               private activeDraftBoxService: ActiveDraftBoxService ) { 

    this.activeDraftBox = {
      hero: {},
      isActive: false,
      previous: null
    };

    this.teamStats = {
      global: 0,
      waveClear: 0,
      pointControl: 0,
      mercs: 0
    }

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
        this.activeDraftBoxService.activeDraftBox.isActive = false;
        this.activeDraftBoxService.activeDraftBox.previous = null;
        this.activeDraftBoxService.updateActiveDraftBox.next();
      });
  }

  calculateMeters(teamName){
    this.selectedHeroService.selectedHero.subscribe(
      (hero: object) => {
        if (this.context && this.context == this.activeDraftBoxService.activeDraftBox.context) {
          if(this.activeDraftBoxService.activeDraftBox.isActive) {
            if(this.activeDraftBoxService.activeDraftBox.hero.name) { 
              this.activeDraftBoxService.activeDraftBox.previous = this.activeDraftBoxService.activeDraftBox.hero 
            };
          this.activeDraftBoxService.activeDraftBox.hero = hero;
            if(this.activeDraftBoxService.activeDraftBox.previous) {
              this.teamStats.global -= this.activeDraftBoxService.activeDraftBox.previous.global;
              this.teamStats.waveClear -= this.activeDraftBoxService.activeDraftBox.previous.waveClear;
              this.teamStats.pointControl -= this.activeDraftBoxService.activeDraftBox.previous.pointControl;
              this.teamStats.mercs -= this.activeDraftBoxService.activeDraftBox.previous.mercs;
            }
            this.teamStats.global += this.activeDraftBoxService.activeDraftBox.hero.global;
            this.teamStats.waveClear += this.activeDraftBoxService.activeDraftBox.hero.waveClear;
            this.teamStats.pointControl += this.activeDraftBoxService.activeDraftBox.hero.pointControl;
            this.teamStats.mercs += this.activeDraftBoxService.activeDraftBox.hero.mercs;
          }
        }
      }
    ); 
  }  

  setMeterColor(meterRef: number, box: number) {
    if(this.teamStats[meterRef] < box && this.mapStats[meterRef] < box) {
      return ['fa', 'fa-square-o'];
    } else if (this.teamStats[meterRef] < box && this.mapStats[meterRef] >= box) {
      return ['fa', 'fa-square', 'grey'];
    } else {
      return ['fa', 'fa-square', 'green'];
    }
  }

  setContext(team) {
	  this.context = team;	  
  };
}


