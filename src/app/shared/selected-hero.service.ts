import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SelectedHeroService {

  selectedHero = new Subject();
  draftedHero = new Subject();

  constructor() { }

}
 