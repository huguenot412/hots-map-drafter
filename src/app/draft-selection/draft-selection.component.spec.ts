import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftSelectionComponent } from './draft-selection.component';

describe('DraftSelectionComponent', () => {
  let component: DraftSelectionComponent;
  let fixture: ComponentFixture<DraftSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
