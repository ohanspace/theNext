import { AdminAuthGuard } from './../../auth/admin-auth-guard.service';
import { AuthGuard } from './../../auth/auth-guard.service';
import { RouterModule, Route } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminProductsComponent } from 'app/store/admin/components/admin-products/admin-products.component';
import { ProductFormComponent } from 'app/store/admin/components/product-form/product-form.component';
import { AdminOrdersComponent } from 'app/store/admin/components/admin-orders/admin-orders.component';
import { SharedModule } from '../shared/shared.module';
import { LeavingFormEditGuard } from '../shared/guards/leaving-form-edit.guard';

const routes: Route[] = [
  {
    path: 'products',
    component: AdminProductsComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'products/create',
    component: ProductFormComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'products/:id',
    component: ProductFormComponent,
    canActivate: [AuthGuard, AdminAuthGuard],
    canDeactivate: [LeavingFormEditGuard]
  },
  {
    path: 'orders',
    component: AdminOrdersComponent,
    canActivate: [AuthGuard]
  }
];
@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [
    AdminProductsComponent,
    ProductFormComponent,
    AdminOrdersComponent
  ],
  exports: [RouterModule]
})
export class AdminModule {}
