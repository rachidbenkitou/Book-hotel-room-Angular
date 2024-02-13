import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelOwnerSearchComponent } from './hotel-owner-search.component';

describe('HotelOwnerSearchComponent', () => {
  let component: HotelOwnerSearchComponent;
  let fixture: ComponentFixture<HotelOwnerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelOwnerSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelOwnerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
