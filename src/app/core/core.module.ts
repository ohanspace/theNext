import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import {LoggerService} from './services/logger.service';
import { NotFoundComponent } from './not-found/not-found.component';
import {LoggersComponent} from './loggers/loggers.component';
import { HeaderComponent } from './header/header.component';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../../environments/environment';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {ConfigService} from './services/config.service';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [
    LoggersComponent,
    NotFoundComponent,
    HeaderComponent
  ],
  providers: [LoggerService, ConfigService]
})
export class CoreModule { }
