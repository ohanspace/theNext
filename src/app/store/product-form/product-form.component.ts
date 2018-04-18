import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../service/product.service';
import { CategoryService } from './../service/category.service';
import { Category } from './../models/category.model';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import 'rxjs/add/operator/take';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories: Category[];
  product = {};
  productId;
  constructor(private categoryService: CategoryService, 
              private productService: ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

    categoryService.getCategories()
        .take(1).subscribe(categories => this.categories = categories);
    
    this.productId = activatedRoute.snapshot.paramMap.get('id');
    if (this.productId) {
      productService.get(this.productId)
        .take(1).subscribe(product => this.product = product);
    }
  }

  ngOnInit() {
  }

  save(product) {
    if (this.productId)
      this.productService.update(this.productId, product);
    else 
      this.productService.create(product);

    this.navigateToProducts();
  }

  delete() {
    if (confirm('are you sure deleting this item?')) {
      this.productService.delete(this.productId);
      this.navigateToProducts();
    }
  }

  private navigateToProducts() {
    this.router.navigate(['/store/admin/products']);
  }

}
