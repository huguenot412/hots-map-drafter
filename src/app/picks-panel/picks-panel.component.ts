import { Component, OnInit } from '@angular/core';

import { BattlegroundComponent } from '../battleground/battleground.component';
import { TeamSummaryComponent } from '../team-summary/team-summary.component';

@Component({
  selector: 'app-picks-panel',
  templateUrl: './picks-panel.component.html',
  styleUrls: ['./picks-panel.component.css']
})
export class PicksPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
