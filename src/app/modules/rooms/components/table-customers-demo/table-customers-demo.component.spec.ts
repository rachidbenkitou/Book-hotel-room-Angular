import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCustomersDemoComponent } from './table-customers-demo.component';

describe('TableCustomersDemoComponent', () => {
  let component: TableCustomersDemoComponent;
  let fixture: ComponentFixture<TableCustomersDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableCustomersDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableCustomersDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
