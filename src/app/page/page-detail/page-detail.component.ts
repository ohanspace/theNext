import {Component, Input, OnInit} from '@angular/core';
import {Page} from '../models/Page';
import {PageService} from '../services/page.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent implements OnInit {

  page: Page;
  constructor(private pageService: PageService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageService.getPage(id).subscribe(page => {
      this.page = page;
    });
  }

  goBack(): void {
    this.location.back();
  }

}
