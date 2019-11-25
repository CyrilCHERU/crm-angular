import { PaginationModule } from './pagination/pagination.module';
import { AmountPipe } from './pipes/amount.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';
import { InvoiceStatusComponent } from './invoice-status/invoice-status.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginFormComponent } from './login-form/login-form.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    CustomersListComponent,
    InvoicesListComponent,
    AmountPipe,
    InvoiceStatusComponent,
    FilterPipe,
    LoginFormComponent,
    CustomerFormComponent,
    InvoiceFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
