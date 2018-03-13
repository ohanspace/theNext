import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesComponent} from './pages/pages.component';
import {PageDetailComponent} from './page-detail/page-detail.component';
import {PageService} from './services/page.service';
import {PageRoutingModule} from './page-routing.module';
import {FeaturedPagesComponent} from './featured-pages/featured-pages.component';
import {PagesFbDataSource} from './data/pages-fb-data-source';
import {PagesRepository} from './data/pages-repository';
import {PagesDataSource} from './data/pages-data-source';

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
  providers: [
    PageService,
    PagesRepository,
    {provide: PagesDataSource, useClass: PagesFbDataSource}
  ]
})
export class PageModule { }
