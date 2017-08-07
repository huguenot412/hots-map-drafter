import { Component, OnInit } from '@angular/core';

import { DraftPanelComponent } from '../draft-panel/draft-panel.component';
import { HeroesComponent } from '../heroes/heroes.component';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
