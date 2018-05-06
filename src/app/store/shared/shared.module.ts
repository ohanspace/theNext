import { NgModule } from '@angular/core';
import { OrderDetailDialogComponent } from 'app/store/shared/components/order-detail-dialog/order-detail-dialog.component';
import { ProductCardComponent } from 'app/store/shared/components/product-card/product-card.component';
import { ProductQuantityComponent } from 'app/store/shared/components/product-quantity/product-quantity.component';
import { CategoryService } from 'app/store/shared/services/category.service';
import { OrderService } from 'app/store/shared/services/order.service';
import { ProductService } from 'app/store/shared/services/product.service';
import { ShoppingCartService } from 'app/store/shared/services/shopping-cart.service';

import { SharedModule as AppSharedModule } from './../../shared/shared.module';
import { LeavingFormEditGuard } from './guards/leaving-form-edit.guard';
import { ProductsResolver } from './resolvers/products.resolver';

@NgModule({
  imports: [AppSharedModule],
  declarations: [
    OrderDetailDialogComponent,
    ProductCardComponent,
    ProductQuantityComponent
  ],
  exports: [
    AppSharedModule,
    OrderDetailDialogComponent,
    ProductCardComponent,
    ProductQuantityComponent
  ],
  providers: [
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService,
    ProductsResolver,
    LeavingFormEditGuard
  ],
  entryComponents: [OrderDetailDialogComponent]
})
export class SharedModule {}
