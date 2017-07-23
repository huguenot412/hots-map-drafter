import { TestBed, inject } from '@angular/core/testing';

import { ActiveDraftBoxService } from './active-draft-box.service';

describe('ActiveDraftBoxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActiveDraftBoxService]
    });
  });

  it('should be created', inject([ActiveDraftBoxService], (service: ActiveDraftBoxService) => {
    expect(service).toBeTruthy();
  }));
});
