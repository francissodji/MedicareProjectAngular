import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivdeactivmedecineadminComponent } from './activdeactivmedecineadmin.component';

describe('ActivdeactivmedecineadminComponent', () => {
  let component: ActivdeactivmedecineadminComponent;
  let fixture: ComponentFixture<ActivdeactivmedecineadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivdeactivmedecineadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivdeactivmedecineadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
