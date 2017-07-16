import { Component, OnInit } from '@angular/core';

import { TeamSummaryService } from '../shared/team-summary.service';
import { SelectedHeroService } from '../shared/selected-hero.service';

@Component({
  selector: 'app-draft-selection',
  templateUrl: './draft-selection.component.html',
  styleUrls: ['./draft-selection.component.css']
})
export class DraftSelectionComponent implements OnInit {

  isActive: boolean = false;

  constructor( private teamSummaryService: TeamSummaryService,
               private selectedHeroService: SelectedHeroService ) { }

  ngOnInit() {

  }

}
