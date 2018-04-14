import { CategoryService } from './../service/category.service';
import { Category } from './../models/category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoryService) {
    categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

  ngOnInit() {
  }

}
