import { ProductFormComponent } from './product-form/product-form.component';
import { AdminAuthGuard } from './../auth/admin-auth-guard.service';
import { AuthGuard } from './../auth/auth-guard.service';
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

            { path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuard]},
            { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},
            { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard]},

            { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuard, AdminAuthGuard]},
            { path: 'admin/products/create', component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard]},
            { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard]},
            { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard]}
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoreRoutingModule { }
