import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersListComponent } from './customers-list/customers-list.component';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';

const routes: Routes = [
  { path: 'customers', component: CustomersListComponent },
  { path: 'invoices', component: InvoicesListComponent },
  { path: '', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
