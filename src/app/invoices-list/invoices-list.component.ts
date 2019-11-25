import { Invoice } from './../models/invoice';
import { InvoiceService } from './../invoice.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.css']
})
export class InvoicesListComponent implements OnInit {


  invoices: Invoice[] = [];

  pages: number[] = [];
  itemsPerPage = 10;
  currentPage = 1;

  search: string = "";

  constructor(private service: InvoiceService) { }

  ngOnInit() {
    return this.service.all().subscribe(invoices => this.invoices = invoices);
  }

  handlePageChanged(page: number) {
    this.currentPage = page;
  }

  handleFilter(event: KeyboardEvent) {
    this.search = (event.target as HTMLInputElement).value;
    this.currentPage = 1;

  }
  public remove() {
    console.log("Tu as clicqué pour supprimer !");
  }
}
