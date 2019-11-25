import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersListComponent } from './customers-list/customers-list.component';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';

const routes: Routes = [
  { path: 'customers', component: CustomersListComponent },
  { path: 'customers/new', component: CustomerFormComponent },
  { path: 'invoices', component: InvoicesListComponent },
  { path: 'invoices/new', component: InvoiceFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: '', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
