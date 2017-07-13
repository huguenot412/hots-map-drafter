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
  selectBattleground: boolean = false;
  selectedBattleground: object;

  constructor( private battlegroundsService: BattlegroundsService ) { }

  ngOnInit() { this.getBattlegrounds(); }

  getBattlegrounds() {
    this.battlegroundsService.getBattlegroundsData()
      .subscribe(
        (response) => {
          const data: Response = response.json();
          this.battlegrounds = data;
          this.selectedBattleground = this.battlegrounds[0];
        },
        (error) => console.log(error)
      );
    // this.selectedBattleground = this.battlegrounds[0];
    // console.log(this.battlegrounds[0].name);
  }

  onBattlegroundHover() {
    this.battlegroundHover = true;
  }

  onBattlegroundExit() {
    this.battlegroundHover = false;
  }

  onSelectBattleground() {
    this.selectBattleground = true;
  }

  onBattlegroundSelected(battleground) {
    this.selectBattleground = false;
    this.selectedBattleground = battleground;
  }

}
