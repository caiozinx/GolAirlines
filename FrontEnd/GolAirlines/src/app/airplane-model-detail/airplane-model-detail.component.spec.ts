import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplaneModelDetailComponent } from './airplane-model-detail.component';

describe('AirplaneModelDetailComponent', () => {
  let component: AirplaneModelDetailComponent;
  let fixture: ComponentFixture<AirplaneModelDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirplaneModelDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirplaneModelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
