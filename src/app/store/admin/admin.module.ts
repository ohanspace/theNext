import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminProductsComponent } from 'app/store/admin/components/admin-products/admin-products.component';
import { ProductFormComponent } from 'app/store/admin/components/product-form/product-form.component';
import { AdminOrdersComponent } from 'app/store/admin/components/admin-orders/admin-orders.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [
    AdminProductsComponent,
    ProductFormComponent,
    AdminOrdersComponent
  ]
})
export class AdminModule {}
