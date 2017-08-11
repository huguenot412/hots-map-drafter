import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicksPanelComponent } from './picks-panel.component';

describe('PicksPanelComponent', () => {
  let component: PicksPanelComponent;
  let fixture: ComponentFixture<PicksPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicksPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicksPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
