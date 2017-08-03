import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/Rx';

import { TeamSummaryComponent } from '../team-summary/team-summary.component';
import { BattlegroundComponent } from '../battleground/battleground.component';
import { TeamSummaryService } from '../shared/team-summary.service';
import { SelectedHeroService } from '../shared/selected-hero.service';
import { BattlegroundsService } from '../shared/battlegrounds.service';

@Component({
  selector: 'app-draft-panel',
  templateUrl: './draft-panel.component.html',
  styleUrls: ['./draft-panel.component.css']
})
export class DraftPanelComponent implements OnInit {

  blueTeamName: string 
  redTeamName: string 

  ngOnInit() {
    this.blueTeamName = "Blue"
    this.redTeamName = "Red"

  }

}
