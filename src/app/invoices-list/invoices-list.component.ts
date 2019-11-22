import { Invoice } from './../models/invoice';
import { InvoiceService } from './../invoice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.css']
})
export class InvoicesListComponent implements OnInit {

  get paginatedInvoices() {
    return this.invoices.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
  }
  invoices: Invoice[] = [];

  pages: number[] = [];
  itemsPerPage = 10;
  currentPage = 1;

  constructor(private service: InvoiceService) { }

  ngOnInit() {
    return this.service.all().subscribe(invoices => {
      this.invoices = invoices;

      const pagesCount = Math.ceil(invoices.length / this.itemsPerPage);

      for (let i = 1; i <= pagesCount; i++) {
        this.pages.push(i);
      }
    });
  }

  handlePageChange(page: number) {
    this.currentPage = page;

  }

  public remove() {
    console.log("Tu as clicqué pour supprimer !");
  }
}
