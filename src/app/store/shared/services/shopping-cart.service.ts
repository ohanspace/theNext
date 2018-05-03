import { Product } from '../models/product.model';
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
  
  async getCart() {
    const cartId = await this.getOrCreateCartId();
    return this.afDb.object<ShoppingCart>('/shopping-carts/' + cartId)
            .valueChanges()
            .map(cart => new ShoppingCart(cart.dateCreated, cart.items));
  }
  
  async addToCart(product: Product) {
    this.changeItemQuantity(product, 1);
  }

  async removeFromCart(product: Product) {
    this.changeItemQuantity(product, -1);
  }

  async clearCart() {
    const cartItems$ = await this.getItemsRef();
    cartItems$.remove();
  }

  private async changeItemQuantity(product: Product, changeValue) {
    const cartId = await this.getOrCreateCartId();
    const item$ = await this.getCartItemRef(product.id);
     
     item$.valueChanges()
       .take(1)
       .subscribe(item => {
          const updatedQty = (item ? item.quantity : 0 ) + changeValue;

          if (updatedQty <= 0) 
            item$.remove();
          else {
            item$.update({
              name: product.name,
              price: product.price,
              imageUrl: product.imageUrl,
              quantity: updatedQty
            });
          } 
          
        });
  }

  private async getCartItemRef(productId: string) {
    const cartId = await this.getOrCreateCartId();
   
    return  this.afDb.object<ShoppingCartItem>('/shopping-carts/'
               + cartId + '/items/' + productId);
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



  private async getOrCreateCartId() {
    let cartId = localStorage.getItem(TOKEN_SHOPPING_CART_ID);
    if (cartId) return cartId;

    const cart = await this.createCart(); 
    cartId = cart.key;      
    localStorage.setItem(TOKEN_SHOPPING_CART_ID, cartId);
    return cartId;
  }



}
