import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmedecineincartComponent } from './listmedecineincart.component';

describe('ListmedecineincartComponent', () => {
  let component: ListmedecineincartComponent;
  let fixture: ComponentFixture<ListmedecineincartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListmedecineincartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmedecineincartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
