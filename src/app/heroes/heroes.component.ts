import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { HeroesDataService } from '../shared/heroes-data.service';
import { SelectedHeroService } from '../shared/selected-hero.service';
import { SelectedHeroComponent } from '../selected-hero/selected-hero.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  errorMessage: string;
  heroes;

  constructor( private heroesData: HeroesDataService, private selectedHeroService: SelectedHeroService ) { }

  ngOnInit() { this.getHeroes(); }

  getHeroes() {
    this.heroesData.getHeroesData()
      .subscribe(
        (response) => {
          const data: Response = response.json();
          this.heroes = data;
          console.log(data);
        },
        (error) => console.log(error)
      );
  }

  onSelectNewHero(hero) {
    this.selectedHeroService.selectedHero.next(hero);
  }

}
