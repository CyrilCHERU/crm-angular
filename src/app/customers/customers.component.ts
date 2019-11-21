
import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.all().subscribe(customers => this.customers = customers);
  }

}
