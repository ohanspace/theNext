import { Router } from '@angular/router';
import { AuthService } from '../../../../../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCart } from '../../../../shared/models/shopping-cart.model';
import { ShoppingCartService } from '../../../../shared/services/shopping-cart.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ShippingAddress } from '../../../../shared/models/shipping-address.model';
import { Order } from '../../../../shared/models/order.model';
import { OrderService } from '../../../../shared/services/order.service';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('shoppingCart') shoppingCart: ShoppingCart;

  shippingAddress = {} as ShippingAddress;
  userId: string;
  userSubscription: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService
  ) {}

  async ngOnInit() {
    this.userSubscription = this.authService.authState$.subscribe(
      auth => (this.userId = auth.uid)
    );
  }

  async placeOrder() {
    const order: Order = new Order(
      this.userId,
      this.shippingAddress,
      this.shoppingCart.items
    );

    const orderId = await this.orderService.placeOrder(order);
    this.router.navigate(['/store/order-success', orderId]);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
