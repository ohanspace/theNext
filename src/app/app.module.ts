import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SystemJsNgModuleLoader } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {RouterModule} from '@angular/router';
import { AppConfigService } from './app-config.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CustomMaterialModule,
    FlexLayoutModule,
    CoreModule,
    NgbModule.forRoot(),
    AuthModule
  ],
  exports: [NgbModule],
  providers: [SystemJsNgModuleLoader, AppConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
