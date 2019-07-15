import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerProductUniqueComponent } from './container-product-unique.component';

describe('ContainerProductUniqueComponent', () => {
  let component: ContainerProductUniqueComponent;
  let fixture: ComponentFixture<ContainerProductUniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerProductUniqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerProductUniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
