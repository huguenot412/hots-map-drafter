import { Injectable } from '@angular/core';

@Injectable()
export class TeamSummaryService {

  activeDraftBox

  constructor() { }

  draftHero(draftBox) {
    this.activeDraftBox = draftBox;
    this.activeDraftBox = true;
  }

  blueDraftBoxes = [
    {
      hero: {name: "Genji"},
      isActive: false
    },
    {
      hero: {name: "Zagara"},
      isActive: true
    },
    {
      hero: {}
    },
    {
      hero: {}
    },
    {
      hero: {}
    }
  ];

  redDraftBoxes = [
    {
      hero: {}
    },
    {
      hero: {}
    },
    {
      hero: {}
    },
    {
      hero: {}
    },
    {
      hero: {}
    }
  ];
}


