import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDeleteCategoryComponent } from './alert-delete-category.component';

describe('AlertDeleteCategoryComponent', () => {
  let component: AlertDeleteCategoryComponent;
  let fixture: ComponentFixture<AlertDeleteCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertDeleteCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDeleteCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
