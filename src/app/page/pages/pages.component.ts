import { Component, OnInit } from '@angular/core';
import { Page } from '../models/Page';
import { PageService } from '../services/page.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  pages: Page[];
  constructor(private pageService: PageService) {}

  ngOnInit() {
    this.getPages();
  }

  getPages(): void {
    this.pageService.getPages().subscribe(pages => {
      this.pages = pages;
    });
  }
}
