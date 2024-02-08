import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelRoomsComponent } from './hotel-rooms.component';

describe('HotelRoomsComponent', () => {
  let component: HotelRoomsComponent;
  let fixture: ComponentFixture<HotelRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelRoomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
