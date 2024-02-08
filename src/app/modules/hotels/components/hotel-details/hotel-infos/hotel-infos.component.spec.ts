import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelInfosComponent } from './hotel-infos.component';

describe('HotelInfosComponent', () => {
  let component: HotelInfosComponent;
  let fixture: ComponentFixture<HotelInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelInfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
