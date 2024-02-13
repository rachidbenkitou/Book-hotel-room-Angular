import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelOwnerAddEditComponent } from './hotel-owner-add-edit.component';

describe('HotelOwnerAddEditComponent', () => {
  let component: HotelOwnerAddEditComponent;
  let fixture: ComponentFixture<HotelOwnerAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelOwnerAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelOwnerAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
