import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplaneModelEditComponent } from './airplane-model-edit.component';

describe('AirplaneModelEditComponent', () => {
  let component: AirplaneModelEditComponent;
  let fixture: ComponentFixture<AirplaneModelEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirplaneModelEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirplaneModelEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
