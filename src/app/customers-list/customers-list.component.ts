import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../models/customer';


@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  get paginatedInvoices() {
    return this.customers.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
  }
  customers: Customer[] = [];

  pages: number[] = [];
  itemsPerPage = 10;
  currentPage = 1;


  constructor(private service: CustomerService) { }

  ngOnInit() {
    this.service.all().subscribe(response => this.customers = response);

  }

  handlePageChanged(page: number) {
    this.currentPage = page;
  }

}
