import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import {LoggerService} from './services/logger.service';
import { NotFoundComponent } from './not-found/not-found.component';
import {LoggersComponent} from './loggers/loggers.component';
import { HeaderComponent } from './header/header.component';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [
    LoggersComponent,
    NotFoundComponent,
    HeaderComponent
  ],
  providers: [LoggerService]
})
export class CoreModule { }
