import { MatTableDataSource } from '@angular/material';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../../../shared/models/shopping-cart.model';
import { ShoppingCartItem } from '../../../shared/models/shopping-cart-item.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart: ShoppingCart;
  itemsDataSource = new MatTableDataSource<ShoppingCartItem>();
  displayedColumns = ['image', 'name', 'changeQuantity', 'unitPrice', 'totalPrice'];

  constructor(private cartService: ShoppingCartService) { }

  async ngOnInit() {
    const cart$ = await this.cartService.getCart();
    cart$.subscribe(c => {
      this.shoppingCart = c;
      this.itemsDataSource.data = c.itemsArray;
      console.log(c.itemsArray);
    });
  }

  get totalItemsQty() {
    return this.shoppingCart ? this.shoppingCart.totalItemsQuantity : 0;
  }

  get totalPrice() {
    return this.shoppingCart ? this.shoppingCart.totalPrice : 0;
  }

  clearCart() {
    this.cartService.clearCart();
  }

}
