import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../service/category.service';
import { Category } from './../models/category.model';
import { ProductService } from './../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categories: Category[];
  selectedCategory: string;
  products: Product[] = [];
  filteredProducts: Product[] = [];
  
  constructor(
      private route: ActivatedRoute,
      private categoryService: CategoryService,
      private productService: ProductService
  ) { 
    categoryService.getAll().take(1)
      .subscribe(categories => this.categories = categories);

    productService.getAll()
      .subscribe(products => {
        this.products = products;
        
        route.queryParamMap.subscribe(params => {
          this.selectedCategory = params.get('category');
          this.filteredProducts = (this.selectedCategory) ? 
              this.products.filter(p => p.category === this.selectedCategory) 
              : this.products;
        });
      });

  }

  ngOnInit() { 
  }

}
