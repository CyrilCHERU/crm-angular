import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';

const routes: Routes = [
  { path: 'customers', component: CustomersListComponent },
  { path: '', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
