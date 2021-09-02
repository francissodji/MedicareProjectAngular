import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifymedecineadminComponent } from './modifymedecineadmin.component';

describe('ModifymedecineadminComponent', () => {
  let component: ModifymedecineadminComponent;
  let fixture: ComponentFixture<ModifymedecineadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifymedecineadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifymedecineadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
