import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelOwnerListComponent } from './hotel-owner-list.component';

describe('HotelOwnerListComponent', () => {
  let component: HotelOwnerListComponent;
  let fixture: ComponentFixture<HotelOwnerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelOwnerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelOwnerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
