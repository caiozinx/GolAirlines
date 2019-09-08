import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplaneModelComponent } from './airplane-model.component';

describe('AirplaneModelComponent', () => {
  let component: AirplaneModelComponent;
  let fixture: ComponentFixture<AirplaneModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirplaneModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirplaneModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
