import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private service: CustomerService) { }

  ngOnInit() {
    this.service.all().subscribe(response => this.customers = response);

  }

}
