import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutdenialComponent } from './checkoutdenial.component';

describe('CheckoutdenialComponent', () => {
  let component: CheckoutdenialComponent;
  let fixture: ComponentFixture<CheckoutdenialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutdenialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutdenialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
