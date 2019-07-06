import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCategoryAdminComponent } from './index-category-admin.component';

describe('IndexCategoryAdminComponent', () => {
  let component: IndexCategoryAdminComponent;
  let fixture: ComponentFixture<IndexCategoryAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexCategoryAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCategoryAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
