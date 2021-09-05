import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditadminmedecineComponent } from './editadminmedecine.component';

describe('EditadminmedecineComponent', () => {
  let component: EditadminmedecineComponent;
  let fixture: ComponentFixture<EditadminmedecineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditadminmedecineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditadminmedecineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
