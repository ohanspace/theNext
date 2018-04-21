import { Product } from './../models/product.model';
import { async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart.model';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/take';
import { Subscriber } from 'rxjs/Subscriber';
import { ShoppingCartItem } from '../models/shopping-cart-item.model';

const TOKEN_SHOPPING_CART_ID = 'shopping-cart-id';

@Injectable()
export class ShoppingCartService {

  constructor(private afDb: AngularFireDatabase) { }

  async addToCart(product: Product) {
     const cartId = await this.getOrCreateCartId();
     const item$ = this.afDb.object('/shopping-carts/'
           + cartId + '/items/' + product.id);
      
      item$.snapshotChanges().take(1)
        .map(item => <ShoppingCartItem> item.payload.val())
        .subscribe(item => {
            if (item.quantity) 
                item$.update({quantity:  item.quantity + 1});
            else item$.set({product: product, quantity: 1});
        });
  }
  private createCart() {
    return this.afDb.list('/shopping-carts')
            .push({
            dateCreated: new Date().getTime()
            });

  }

  private getCart(cartId: string): Observable<ShoppingCart> {
      return <Observable<ShoppingCart>>
             this.afDb.object('/shopping-carts/' + cartId)
            .valueChanges();
  }


  private async getOrCreateCartId() {
    let cartId = localStorage.getItem(TOKEN_SHOPPING_CART_ID);
    if (cartId) return cartId;

    const cart = await this.createCart(); 
    cartId = cart.key;      
    localStorage.setItem(TOKEN_SHOPPING_CART_ID, cartId);
    return cartId;
  }



}
