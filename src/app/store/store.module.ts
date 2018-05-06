import { NgModule } from '@angular/core';
import { AdminModule } from 'app/store/admin/admin.module';

import { MatNavbarComponent } from './core/mat-navbar/mat-navbar.component';
import { SearchBarComponent } from './core/search-bar/search-bar.component';
import { ShellComponent } from './core/shell/shell.component';
import { SharedModule as StoreSharedModule } from './shared/shared.module';
import { ShoppingModule } from './shopping/shopping.module';
import { StoreRoutingModule } from './store-routing.module';

@NgModule({
  imports: [StoreRoutingModule, StoreSharedModule, ShoppingModule, AdminModule],
  declarations: [ShellComponent, MatNavbarComponent, SearchBarComponent]
})
export class StoreModule {}
