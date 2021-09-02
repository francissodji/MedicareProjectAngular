import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMedecineAdminComponent } from './list-medecine-admin.component';

describe('ListMedecineAdminComponent', () => {
  let component: ListMedecineAdminComponent;
  let fixture: ComponentFixture<ListMedecineAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMedecineAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMedecineAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
