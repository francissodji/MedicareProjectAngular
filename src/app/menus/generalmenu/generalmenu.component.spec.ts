import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralmenuComponent } from './generalmenu.component';

describe('GeneralmenuComponent', () => {
  let component: GeneralmenuComponent;
  let fixture: ComponentFixture<GeneralmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
