import { Product } from './../models/product.model';
import { async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart.model';
import 'rxjs/add/operator/take';
import { Subscriber } from 'rxjs/Subscriber';
import { ShoppingCartItem } from '../models/shopping-cart-item.model';

const TOKEN_SHOPPING_CART_ID = 'shopping-cart-id';

@Injectable()
export class ShoppingCartService {
  cart$: Observable<ShoppingCart>;

  constructor(private afDb: AngularFireDatabase) {
  }


  async addToCart(product: Product) {
    this.changeItemQuantity(product, 1);
  }

  async removeFromCart(product: Product) {
    this.changeItemQuantity(product, -1);
  }

  async changeItemQuantity(product: Product, changeValue) {
    const cartId = await this.getOrCreateCartId();
    const item$ = await this.getCartItemRef(product.id);
     
     item$.valueChanges()
       .take(1)
       .subscribe(item => {
               item$.update({
                 product: product,
                 quantity:  (item ? item.quantity : 0) + changeValue
               });
       });
  }

  private async getCartItemRef(productId: string) {
    const cartId = await this.getOrCreateCartId();
   
    return  this.afDb.object<ShoppingCartItem>('/shopping-carts/'
               + cartId + '/items/' + productId);
  }

  async getCartItem( productId: string) {
      const cartId = await this.getOrCreateCartId();
      return this.afDb.object<ShoppingCartItem>('/shopping-carts/'
             + cartId + '/items/' + productId)
             .snapshotChanges()
             .map(item => item.payload.val());
  }

  private createCart() {
    return this.afDb.list('/shopping-carts')
            .push({
                dateCreated: new Date().getTime()
            });

  }

  private async getItemsRef() {
    const cartId = await this.getOrCreateCartId();
    return this.afDb.list<ShoppingCartItem[]>('/shopping-carts/' + cartId + '/items');
  }

  async getCart() {
    const cartId = await this.getOrCreateCartId();
    return this.afDb.object<ShoppingCart>('/shopping-carts/' + cartId)
            .valueChanges()
            .map(cart => {
                 return  new ShoppingCart(cart.dateCreated, cart.items);
                }
            );
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
