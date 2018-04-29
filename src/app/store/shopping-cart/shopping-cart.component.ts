import { MatTableDataSource } from '@angular/material';
import { ShoppingCartService } from './../service/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart.model';
import { ShoppingCartItem } from '../models/shopping-cart-item.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart: ShoppingCart;
  itemsDataSource = new MatTableDataSource<ShoppingCartItem>();
  displayedColumns = ['name', 'changeQuantity', 'unitPrice', 'totalPrice'];

  constructor(private cartService: ShoppingCartService) { }

  async ngOnInit() {
    const cart$ = await this.cartService.getCart();
    cart$.subscribe(c => {
      this.shoppingCart = c;
      this.itemsDataSource.data = c.itemsArray;
    });
  }

  getTotalItemsQty() {
    return this.shoppingCart ? this.shoppingCart.totalItemsQuantity : 0;
  }

  getTotalPrice() {
    return this.shoppingCart ? this.shoppingCart.totalPrice : 0;
  }

}
