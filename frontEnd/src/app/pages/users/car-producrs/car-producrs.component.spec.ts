import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarProducrsComponent } from './car-producrs.component';

describe('CarProducrsComponent', () => {
  let component: CarProducrsComponent;
  let fixture: ComponentFixture<CarProducrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarProducrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarProducrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
