import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewmedecinComponent } from './addnewmedecin.component';

describe('AddnewmedecinComponent', () => {
  let component: AddnewmedecinComponent;
  let fixture: ComponentFixture<AddnewmedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewmedecinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewmedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
