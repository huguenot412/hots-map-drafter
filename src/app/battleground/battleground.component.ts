import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { BattlegroundsService } from '../shared/battlegrounds.service';

@Component({
  selector: 'app-battleground',
  templateUrl: './battleground.component.html',
  styleUrls: ['./battleground.component.css']
})
export class BattlegroundComponent implements OnInit {

  battlegrounds: any;
  battlegroundHover: boolean = false;
  selectingBattleground: boolean = false;

  constructor( private battlegroundsService: BattlegroundsService ) { }

  ngOnInit() { this.getBattlegrounds(); }

  getBattlegrounds() {
    this.battlegroundsService.getBattlegroundsData()
      .subscribe(
        (response) => {
          const data: Response = response.json();
          this.battlegrounds = data;
          this.battlegroundsService.selectedBattleground = this.battlegrounds[0];
        },
        (error) => console.log(error)
      );
  }

  onBattlegroundHover() {
    this.battlegroundHover = true;
  }

  onBattlegroundExit() {
    this.battlegroundHover = false;
  }

  onSelectBattleground() {
    this.selectingBattleground = true;
  }

  onBattlegroundSelected(battleground) {
    this.selectingBattleground = false;
    this.battlegroundsService.selectedBattleground = battleground;
  }

}
