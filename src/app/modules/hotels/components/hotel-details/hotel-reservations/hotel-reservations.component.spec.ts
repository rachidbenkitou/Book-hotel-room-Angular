import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelReservationsComponent } from './hotel-reservations.component';

describe('HotelReservationsComponent', () => {
  let component: HotelReservationsComponent;
  let fixture: ComponentFixture<HotelReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelReservationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
