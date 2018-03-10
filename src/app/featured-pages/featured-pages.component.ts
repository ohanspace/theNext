import { Component, OnInit } from '@angular/core';
import {Page} from '../page/models/Page';
import {PageService} from '../page/services/page.service';

@Component({
  selector: 'app-featured-pages',
  templateUrl: './featured-pages.component.html',
  styleUrls: ['./featured-pages.component.css']
})
export class FeaturedPagesComponent implements OnInit {

  pages: Page[];
  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.pageService.getFeaturedPages().subscribe(pages => {
      this.pages = pages;
    });
  }

}
