import { TestBed, inject } from '@angular/core/testing';

import { TeamSummaryService } from './team-summary.service';

describe('TeamSummaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamSummaryService]
    });
  });

  it('should be created', inject([TeamSummaryService], (service: TeamSummaryService) => {
    expect(service).toBeTruthy();
  }));
});
