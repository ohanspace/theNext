import { ShoppingCartService } from './shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class OrderService {

  constructor(private afDb: AngularFireDatabase, 
      private cartService: ShoppingCartService) { }

  async placeOrder(order: Order) {
    const orderId = await this.afDb.list('/orders').push(order)
          .then(res => res.key); // id of newly saved order
          
    this.cartService.clearCart();
    return orderId;

  }

}
