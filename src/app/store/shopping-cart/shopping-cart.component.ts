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
  cart: ShoppingCart;
  itemsDataSource = new MatTableDataSource<ShoppingCartItem>();
  displayedColumns = ['name', 'quantity'];

  constructor(private cartService: ShoppingCartService) { }

  async ngOnInit() {
    const cart$ = await this.cartService.getCart();
    cart$.subscribe(c => {
      this.cart = c;
      this.itemsDataSource.data = c.itemsArray;
      console.log(c.itemsArray);
    });
  }

  getTotalItemsQty() {
    return this.cart ? this.cart.totalItemsQuantity : 0;
  }

}
