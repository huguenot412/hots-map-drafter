import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HeroesDataService {

  constructor( private http: Http ) { }

  getHeroesData () {
    return this.http.get('../assets/heroes.json');
  }

}
