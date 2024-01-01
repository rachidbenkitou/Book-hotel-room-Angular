import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelAddEditComponent } from './hotel-add-edit.component';

describe('HotelAddEditComponent', () => {
  let component: HotelAddEditComponent;
  let fixture: ComponentFixture<HotelAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelAddEditComponent]
    });
    fixture = TestBed.createComponent(HotelAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
