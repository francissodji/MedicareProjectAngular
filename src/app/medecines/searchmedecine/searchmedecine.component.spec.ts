import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchmedecineComponent } from './searchmedecine.component';

describe('SearchmedecineComponent', () => {
  let component: SearchmedecineComponent;
  let fixture: ComponentFixture<SearchmedecineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchmedecineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchmedecineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
