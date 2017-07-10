import { TestBed, inject } from '@angular/core/testing';

import { SelectedHeroService } from './selected-hero.service';

describe('SelectedHeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectedHeroService]
    });
  });

  it('should be created', inject([SelectedHeroService], (service: SelectedHeroService) => {
    expect(service).toBeTruthy();
  }));
});
