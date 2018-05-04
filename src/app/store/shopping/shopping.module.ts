import { AuthGuard } from './../../auth/auth-guard.service';
import { NgModule } from '@angular/core';
import { CheckOutComponent } from 'app/store/shopping/components/check-out/check-out.component';
import { ShippingFormComponent } from 'app/store/shopping/components/check-out/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from 'app/store/shopping/components/check-out/shopping-cart-summary/shopping-cart-summary.component';
import { MyOrdersComponent } from 'app/store/shopping/components/my-orders/my-orders.component';
import { OrderSuccessComponent } from 'app/store/shopping/components/order-success/order-success.component';
import { ProductFilterComponent } from 'app/store/shopping/components/products/product-filter/product-filter.component';
import { ProductsComponent } from 'app/store/shopping/components/products/products.component';
import { ShoppingCartComponent } from 'app/store/shopping/components/shopping-cart/shopping-cart.component';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'products' },
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      {
        path: 'my-orders',
        component: MyOrdersComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'check-out',
        component: CheckOutComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'order-success/:id',
        component: OrderSuccessComponent,
        canActivate: [AuthGuard]
      }
    ])
  ],
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductFilterComponent,
    ShippingFormComponent,
    ShoppingCartSummaryComponent
  ],
  exports: [RouterModule]
})
export class ShoppingModule {}
