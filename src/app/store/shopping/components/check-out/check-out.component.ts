import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCart } from '../../../shared/models/shopping-cart.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy {
  cartSubscription: Subscription;
  shoppingCart: ShoppingCart;
             
  constructor( private cartService: ShoppingCartService) { }

  async ngOnInit() {
    const cart$ = await this.cartService.getCart();
    this.cartSubscription = cart$.subscribe(c => this.shoppingCart = c);
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }

}
