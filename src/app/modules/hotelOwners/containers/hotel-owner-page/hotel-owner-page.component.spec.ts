import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelOwnerPageComponent } from './hotel-owner-page.component';

describe('HotelOwnerPageComponent', () => {
  let component: HotelOwnerPageComponent;
  let fixture: ComponentFixture<HotelOwnerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelOwnerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelOwnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
