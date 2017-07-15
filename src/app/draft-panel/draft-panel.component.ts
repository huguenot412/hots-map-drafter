import { Component, OnInit } from '@angular/core';

import { TeamSummaryComponent } from '../team-summary/team-summary.component';
import { BattlegroundComponent } from '../battleground/battleground.component';
import { DraftSelectionComponent } from '../draft-selection/draft-selection.component';
import { TeamStatsComponent } from '../team-stats/team-stats.component';
import { TeamSummaryService } from '../shared/team-summary.service';

@Component({
  selector: 'app-draft-panel',
  templateUrl: './draft-panel.component.html',
  styleUrls: ['./draft-panel.component.css']
})
export class DraftPanelComponent implements OnInit {

  isActive: boolean = false
  redTeamDrafts: object[]
  blueTeamDrafts: object[]

  constructor( private teamSummaryService: TeamSummaryService ) { }

  ngOnInit() {
    this.blueTeamDrafts = this.teamSummaryService.blueDraftBoxes;
    this.redTeamDrafts = this.teamSummaryService.redDraftBoxes;
  }

  onSelectDraftBox(draftbox) {
    console.log(draftbox);
  }

  onSelect(selectionBox) {
    this.teamSummaryService.draftHero(selectionBox);
    selectionBox.isActive = true;
  }

}
