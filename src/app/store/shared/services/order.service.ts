
import {map} from 'rxjs/operators';
import { ShoppingCartService } from './shopping-cart.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class OrderService {
  constructor(
    private afDb: AngularFireDatabase,
    private cartService: ShoppingCartService
  ) {}

  async placeOrder(order: Order) {
    const orderId = await this.afDb
      .list('/orders')
      .push(order)
      .then(res => res.key); // id of newly saved order

    this.cartService.clearCart();
    return orderId;
  }

  getAll(): Observable<Order[]> {
    return this.afDb
      .list('/orders')
      .snapshotChanges().pipe(
      map(orders =>
        orders.map(order => ({ id: order.key, ...order.payload.val() }))
      ));
  }

  getByUserId(userId: string): Observable<Order[]> {
    return this.afDb
      .list('/orders', ref => ref.orderByChild('userId').equalTo(userId))
      .snapshotChanges().pipe(
      map(orders =>
        orders.map(order => ({ id: order.key, ...order.payload.val() }))
      ));
  }
}
