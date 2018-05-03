import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminModule } from 'app/store/admin/admin.module';

import { CustomMaterialModule } from './../custom-material/custom-material.module';
import { MainComponent } from './core/main/main.component';
import { MatNavbarComponent } from './core/mat-navbar/mat-navbar.component';
import { SharedModule as StoreSharedModule } from './shared/shared.module';
import { StoreRoutingModule } from './store-routing.module';
import { ShoppingModule } from './shopping/shopping.module';

@NgModule({
  imports: [StoreRoutingModule, StoreSharedModule, ShoppingModule, AdminModule],
  declarations: [MainComponent, MatNavbarComponent]
})
export class StoreModule {}
