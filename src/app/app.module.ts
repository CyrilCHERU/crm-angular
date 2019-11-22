import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    CustomersListComponent,
    InvoicesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
