import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject'; 

@Injectable()
export class BattlegroundsService {

  selectedBattleground: object;

  displayedBattleground = new Subject();

  constructor( private http: Http ) { }

  getBattlegroundsData () {
    return this.http.get('../assets/battlegrounds.json');
  }



}
