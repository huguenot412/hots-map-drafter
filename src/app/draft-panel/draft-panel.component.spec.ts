import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftPanelComponent } from './draft-panel.component';

describe('DraftPanelComponent', () => {
  let component: DraftPanelComponent;
  let fixture: ComponentFixture<DraftPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
