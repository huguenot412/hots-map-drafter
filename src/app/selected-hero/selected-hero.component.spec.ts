import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedHeroComponent } from './selected-hero.component';

describe('SelectedHeroComponent', () => {
  let component: SelectedHeroComponent;
  let fixture: ComponentFixture<SelectedHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
