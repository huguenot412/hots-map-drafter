import { Component, OnInit } from '@angular/core';

import { HeroesComponent } from '../heroes/heroes.component';
import { PicksPanelComponent } from '../picks-panel/picks-panel.component';

@Component({
  selector: 'app-my-picks',
  templateUrl: './my-picks.component.html',
  styleUrls: ['./my-picks.component.css']
})
export class MyPicksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
