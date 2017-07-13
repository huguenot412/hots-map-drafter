import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BattlegroundsService {

  selectedBattleground: object;

  constructor( private http: Http ) { }

  getBattlegroundsData () {
    return this.http.get('../assets/battlegrounds.json');
  }



}
