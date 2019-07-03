import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexUserAdminComponent } from './index-user-admin.component';

describe('IndexUserAdminComponent', () => {
  let component: IndexUserAdminComponent;
  let fixture: ComponentFixture<IndexUserAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexUserAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
