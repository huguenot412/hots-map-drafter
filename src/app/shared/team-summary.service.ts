import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TeamSummaryService {

  constructor() { }

  activeDraftBox = new Subject();
  
}


