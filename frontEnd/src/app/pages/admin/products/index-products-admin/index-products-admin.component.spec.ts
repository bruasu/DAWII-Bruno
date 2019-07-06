import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexProductsAdminComponent } from './index-products-admin.component';

describe('IndexProductsAdminComponent', () => {
  let component: IndexProductsAdminComponent;
  let fixture: ComponentFixture<IndexProductsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexProductsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexProductsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
