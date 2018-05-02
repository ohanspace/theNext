import { ProductService } from './service/product.service';
import { OrderService } from './service/order.service';
import { SharedModule } from './../shared/shared.module';
import { CategoryService } from './service/category.service';
import { CustomMaterialModule } from './../custom-material/custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { StoreRoutingModule } from './store-routing.module';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatNavbarComponent } from './mat-navbar/mat-navbar.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { ShoppingCartService } from './service/shopping-cart.service';
import { ProductQuantityComponent } from './shared/product-quantity/product-quantity.component';
import { ShippingFormComponent } from './check-out/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './check-out/shopping-cart-summary/shopping-cart-summary.component';

@NgModule({
  imports: [
    CommonModule,
    StoreRoutingModule,
    CustomMaterialModule,
    SharedModule,
    NgbModule
  ],
  declarations: [
    MainComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    MatNavbarComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    ShippingFormComponent,
    ShoppingCartSummaryComponent
  ],
  providers: [ 
    CategoryService, 
    ProductService, 
    ShoppingCartService,
    OrderService
  ]
})
export class StoreModule { }
