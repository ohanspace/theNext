import { Component, OnInit } from '@angular/core';
import {Page} from '../models/Page';
import {PageService} from '../services/page.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  pages: Page[];
  constructor(private pageService: PageService, private toastr: ToastrService) { }

  ngOnInit() {
      this.getPages();
  }

  getPages(): void {
      this.pageService.getPages().subscribe(pages => {
          this.pages = pages;
          setTimeout(() => this.toastr.success('Pages loaded', 'hello'));

      });
  }
}
