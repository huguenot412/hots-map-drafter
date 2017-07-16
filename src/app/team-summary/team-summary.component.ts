import { Component, OnInit } from '@angular/core';

import { DraftSelectionComponent } from '../draft-selection/draft-selection.component';
import { TeamStatsComponent } from '../team-stats/team-stats.component';
import { TeamSummaryService } from '../shared/team-summary.service';

@Component({
  selector: 'app-team-summary',
  templateUrl: './team-summary.component.html',
  styleUrls: ['./team-summary.component.css']
})
export class TeamSummaryComponent implements OnInit {

  redTeam
  blueTeam

  constructor( private teamSummaryService: TeamSummaryService) { }

  ngOnInit() {

  }

}
