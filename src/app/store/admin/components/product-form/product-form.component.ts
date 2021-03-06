
import {take} from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';
import { CategoryService } from '../../../shared/services/category.service';
import { Category } from '../../../shared/models/category.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, NgForm } from '@angular/forms';

import { Product } from '../../../shared/models/product.model';
import { EditableFormComponent } from '../../../shared/interfaces/editable-form-component';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, EditableFormComponent {
  @ViewChild('f') form: NgForm;

  categories: Category[];
  product = {} as Product;
  productId;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    categoryService
      .getAll().pipe(
      take(1))
      .subscribe(categories => (this.categories = categories));

    this.productId = activatedRoute.snapshot.paramMap.get('id');
    if (this.productId) {
      productService
        .get(this.productId).pipe(
        take(1))
        .subscribe(product => (this.product = product));
    }
  }

  ngOnInit() {}

  save(product) {
    if (this.productId) this.productService.update(this.productId, product);
    else this.productService.create(product);

    this.resetForm();
    this.navigateToProducts();
  }

  delete() {
    if (confirm('are you sure deleting this item?')) {
      this.productService.delete(this.productId);

      this.resetForm();
      this.navigateToProducts();
    }
  }

  private navigateToProducts() {
    this.router.navigate(['/store/admin/products']);
  }

  private resetForm() {
    this.form.reset();
  }
}
