import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAddproductComponent } from './admin-addproduct/admin-addproduct.component';
import { AdminAdminComponent } from './admin-admin/admin-admin.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminDashboardComponent, children: [
      { path: '', redirectTo: 'admin-home', pathMatch: 'full' },
      { path: 'admin-home', component: AdminHomeComponent },
      { path: 'admin-addproduct', component: AdminAddproductComponent },
      { path: 'admin-admin', component: AdminAdminComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
