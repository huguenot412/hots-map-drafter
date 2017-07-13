import { TestBed, inject } from '@angular/core/testing';

import { BattlegroundsService } from './battlegrounds.service';

describe('BattlegroundsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BattlegroundsService]
    });
  });

  it('should be created', inject([BattlegroundsService], (service: BattlegroundsService) => {
    expect(service).toBeTruthy();
  }));
});
