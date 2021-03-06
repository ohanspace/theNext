import { Observable ,  Subscription } from 'rxjs';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { ShoppingCart } from '../../../shared/models/shopping-cart.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedCategory: string;
  searchQuery: string;
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
    this.products = this.route.snapshot.data['products'];
    this.applyFilter();
  }

  private applyFilter() {
    this.route.queryParamMap.subscribe(params => {
      this.selectedCategory = params.get('category');
      this.searchQuery = params.get('searchQuery');

      this.applyCategoryFilter();
      this.applySearchQueryFilter();
    });
  }

  private applyCategoryFilter() {
    this.filteredProducts = this.selectedCategory
      ? this.products.filter(p => p.category === this.selectedCategory)
      : this.products;
  }

  private applySearchQueryFilter() {
    if (this.searchQuery) {
      this.filteredProducts = this.products.filter(
        p => p.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) !== -1
      );
    }
  }
}
