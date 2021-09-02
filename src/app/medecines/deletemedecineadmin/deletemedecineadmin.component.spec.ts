import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletemedecineadminComponent } from './deletemedecineadmin.component';

describe('DeletemedecineadminComponent', () => {
  let component: DeletemedecineadminComponent;
  let fixture: ComponentFixture<DeletemedecineadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletemedecineadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletemedecineadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
