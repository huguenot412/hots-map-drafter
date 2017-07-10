import { Component, OnInit } from '@angular/core';

import { SelectedHeroService } from '../shared/selected-hero.service';

@Component({
  selector: 'app-selected-hero',
  templateUrl: './selected-hero.component.html',
  styleUrls: ['./selected-hero.component.css']
})
export class SelectedHeroComponent implements OnInit {

  selectedHero: object;

  constructor( private selectedHeroService: SelectedHeroService ) { }

  ngOnInit() {
    this.selectedHeroService.selectedHero.subscribe(
      (hero: object) => {
        this.selectedHero = hero;
      });
  }

}
