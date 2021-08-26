import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmedecineComponent } from './editmedecine.component';

describe('EditmedecineComponent', () => {
  let component: EditmedecineComponent;
  let fixture: ComponentFixture<EditmedecineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmedecineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmedecineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
