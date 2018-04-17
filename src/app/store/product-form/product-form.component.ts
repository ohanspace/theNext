import { Router } from '@angular/router';
import { ProductService } from './../service/product.service';
import { CategoryService } from './../service/category.service';
import { Category } from './../models/category.model';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoryService, 
              private productService: ProductService,
            private router: Router) {
    categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

  ngOnInit() {
  }

  save(product) {
    console.log(product); 
    this.productService.create(product);
    this.router.navigate(['/store/admin/products']);
  }

}
