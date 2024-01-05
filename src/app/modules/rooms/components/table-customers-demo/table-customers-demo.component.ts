import { Component } from '@angular/core';
import {CustomerService} from "../../services/customerservice";
import {Customer, Representative} from "../../models/customer";
import {AutoCompleteCompleteEvent} from "primeng/autocomplete";

@Component({
  selector: 'app-table-customers-demo',
  templateUrl: './table-customers-demo.component.html',
  styleUrl: './table-customers-demo.component.scss'
})
export class TableCustomersDemoComponent {
  customers!: Customer[];

  selectedCustomers!: Customer[];

  representatives!: Representative[];

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.getCustomersLarge().then((customers) => {
      this.customers = customers;
      this.loading = false;

      this.customers.forEach((customer) => (customer.date = new Date(<Date>customer.date)));
    });

    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
    ];

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' }
    ];
  }

  getSeverity(status: string): 'success' | 'info' | 'warning' | 'danger' | undefined {
    switch (status) {
      case 'unqualified':
        return 'danger';

      case 'qualified':
        return 'success';

      case 'new':
        return 'info';

      case 'negotiation':
        return 'warning';

      case 'renewal':
        return undefined; // Change null to undefined

      default:
        return 'warning';
    }
  }

  // Array of city options
  cityOptions = [
    { label: 'City A', value: 'cityA' },
    { label: 'City B', value: 'cityB' },
    { label: 'City C', value: 'cityC' },
    // Add more cities as needed
  ];

  loading1: boolean = false;

  load() {
    this.loading1 = true;

    setTimeout(() => {
      this.loading1 = false
    }, 2000);
  }
}
