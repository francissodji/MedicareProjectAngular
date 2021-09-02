import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmedecineadminComponent } from './editmedecineadmin.component';

describe('EditmedecineadminComponent', () => {
  let component: EditmedecineadminComponent;
  let fixture: ComponentFixture<EditmedecineadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmedecineadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmedecineadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
