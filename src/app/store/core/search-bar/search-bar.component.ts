import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchQuery = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.initSearchInput();
  }

  initSearchInput() {
    this.searchQuery = this.route.snapshot.queryParams['query'];
  }

  search() {
    this.router.navigate(['/store/products'], {
      queryParams: {
        searchQuery: this.searchQuery
      }
    });
  }
}
