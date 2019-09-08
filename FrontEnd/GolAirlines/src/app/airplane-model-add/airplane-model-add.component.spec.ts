import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplaneModelAddComponent } from './airplane-model-add.component';

describe('AirplaneModelAddComponent', () => {
  let component: AirplaneModelAddComponent;
  let fixture: ComponentFixture<AirplaneModelAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirplaneModelAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirplaneModelAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
