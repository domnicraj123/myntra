import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminAddproductComponent } from './admin-addproduct/admin-addproduct.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminAdminComponent } from './admin-admin/admin-admin.component';


@NgModule({
  declarations: [
    AdminAddproductComponent,
    AdminDashboardComponent,
    AdminHomeComponent,
    AdminAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
