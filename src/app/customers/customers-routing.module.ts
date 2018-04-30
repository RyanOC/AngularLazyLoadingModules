import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { Control1Component } from '../control1/control1.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerListComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  , declarations: [ Control1Component ]
})
export class CustomersRoutingModule { }
