import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsComponent } from './products/products.component';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MainComponent } from './main/main.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: '', redirectTo: 'products'},
            { path: 'products', component: ProductsComponent},
            { path: 'shopping-cart', component: ShoppingCartComponent},
            { path: 'my-orders', component: MyOrdersComponent},
            { path: 'check-out', component: CheckOutComponent},
            { path: 'order-success', component: OrderSuccessComponent},
            { path: 'admin/products', component: AdminProductsComponent},
            { path: 'admin/orders', component: AdminOrdersComponent}
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoreRoutingModule { }
