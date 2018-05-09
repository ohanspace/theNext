
import {take} from 'rxjs/operators';
import { Category } from '../../../../shared/models/category.model';
import { CategoryService } from '../../../../shared/services/category.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {
  @Input('selectedCategory') selectedCategory: string;
  
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {
    categoryService.getAll().pipe(take(1))
      .subscribe(c => this.categories = c);
  }
}
