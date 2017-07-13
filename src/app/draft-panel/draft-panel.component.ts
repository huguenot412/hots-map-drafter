import { Component, OnInit } from '@angular/core';

import { TeamSummaryComponent } from '../team-summary/team-summary.component';
import { BattlegroundComponent } from '../battleground/battleground.component';

@Component({
  selector: 'app-draft-panel',
  templateUrl: './draft-panel.component.html',
  styleUrls: ['./draft-panel.component.css']
})
export class DraftPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
