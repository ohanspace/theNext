import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesComponent} from './pages/pages.component';
import {PageDetailComponent} from './page-detail/page-detail.component';
import {PageService} from './services/page.service';
import {PageRoutingModule} from './page-routing.module';
import {LoggerService} from '../core/services/logger.service';
import {FeaturedPagesComponent} from './featured-pages/featured-pages.component';

@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule
  ],
  declarations: [
    PagesComponent,
    PageDetailComponent,
    FeaturedPagesComponent
  ],
    providers: [PageService, LoggerService]
})
export class PageModule { }
