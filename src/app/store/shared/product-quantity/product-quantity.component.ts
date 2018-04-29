import { Product } from './../../models/product.model';
import { ShoppingCartItem } from './../../models/shopping-cart-item.model';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ShoppingCartService } from '../../service/shopping-cart.service';
import { ShoppingCart } from '../../models/shopping-cart.model';
import * as _ from 'lodash';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {

  @Input() product = {} as Product;
  @Input() shoppingCart = {} as ShoppingCart;

  constructor(private cartService: ShoppingCartService) { }


  addToCart() {
    this.cartService.addToCart(this.product);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }

  get quantity() {
    if (! _.isEmpty(this.shoppingCart))
      return this.shoppingCart.getQtyOfProduct(this.product);
    return 0;
  }

}
