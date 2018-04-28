import { ShoppingCartItem } from './../../models/shopping-cart-item.model';
import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../service/shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {
  @Input() cartItem: ShoppingCartItem;

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
  }


  addToCart() {
    this.cartService.addToCart(this.cartItem.product);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.cartItem.product);
  }

  getQuantity() {
    return this.cartItem ? this.cartItem.quantity : 0;
  }

}
