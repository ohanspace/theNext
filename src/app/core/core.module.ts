import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LoggerService} from './services/logger.service';
import { NotFoundComponent } from './not-found/not-found.component';
import {LoggersComponent} from './loggers/loggers.component';
import { HeaderComponent } from './header/header.component';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../../environments/environment';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuthModule } from 'angularfire2/auth';
@NgModule({
  imports: [
    CommonModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
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
