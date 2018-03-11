import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import {LoggerService} from './services/logger.service';
import { NotFoundComponent } from './not-found/not-found.component';
import {LoggersComponent} from './loggers/loggers.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports:[
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
