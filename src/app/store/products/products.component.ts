import { Observable } from 'rxjs/Observable';
import { ShoppingCartService } from './../service/shopping-cart.service';
import { ShoppingCart } from './../models/shopping-cart.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../service/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../models/product.model';
import 'rxjs/add/operator/take';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedCategory: string;
  shoppingCart$: Observable<ShoppingCart>;

  constructor(
      private route: ActivatedRoute,
      private productService: ProductService,
      private cartService: ShoppingCartService
  ) {}

  async ngOnInit() { 
    this.shoppingCart$ = await this.cartService.getCart();
    this.populateProducts();
  }

  private populateProducts() {
    this.productService.getAll()
      .subscribe(products => {
        this.products = products;
        this.applyFilter();
    });
  }

  private applyFilter() {
    this.route.queryParamMap.subscribe(params => {
      this.selectedCategory = params.get('category');
      this.filteredProducts = (this.selectedCategory) ? 
          this.products.filter(p => p.category === this.selectedCategory) 
          : this.products;
    });
  }

}
