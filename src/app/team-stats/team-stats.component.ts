import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.css']
})
export class TeamStatsComponent implements OnInit {

  blueTeamStats: object = {
    global: 0,
    waveClear: 0,
    pointControl: 0,
    mercs: 0
  }

  redTeamStats: object = {
    global: 0,
    waveClear: 0,
    pointControl: 0,
    mercs: 0
  }

  mapStats: object = {
    global: 0,
    waveClear: 0,
    pointControl: 0,
    mercs: 0
  }

  constructor() { }

  ngOnInit() {
  }

}
