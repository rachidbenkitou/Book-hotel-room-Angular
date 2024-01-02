import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsPageComponent } from './hotels-page.component';

describe('HotelsPageComponent', () => {
  let component: HotelsPageComponent;
  let fixture: ComponentFixture<HotelsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotelsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
