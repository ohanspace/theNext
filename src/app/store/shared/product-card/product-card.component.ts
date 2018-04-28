import { Product } from './../../models/product.model';
import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../service/shopping-cart.service';
import { ShoppingCart } from '../../models/shopping-cart.model';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: Product;
  @Input('showActions') showActions = true;
  @Input('shoppingCart') shoppingCart: ShoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }

  getQuantity() {
    if (!this.shoppingCart) return 0;
    const item = this.shoppingCart.itemsMap[this.product.id];
    return item ? item.quantity : 0;
  }

}
