import { ActivatedRoute } from '@angular/router';
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
  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedCategory: string;

  constructor(
      private route: ActivatedRoute,
      private productService: ProductService
  ) { 

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
