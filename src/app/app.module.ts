import { NgModule, SystemJsNgModuleLoader } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppConfigService } from './app-config.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { CustomMaterialModule } from './custom-material/custom-material.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CustomMaterialModule,
    FlexLayoutModule,
    CoreModule,
    AuthModule
  ],
  providers: [SystemJsNgModuleLoader, AppConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {}
