import { RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../auth/user/user.model';
import { AuthService } from '../../../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';
@Component({
  selector: 'app-mat-navbar',
  templateUrl: './mat-navbar.component.html',
  styleUrls: ['./mat-navbar.component.css']
})
export class MatNavbarComponent implements OnInit {
  user: User;
  totalItemsInCart: number;
  searchQuery: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private cartService: ShoppingCartService
  ) {
    this.authService.user$.subscribe(user => (this.user = user));
    console.log(this.router.isActive('/store/search', false));
  }

  async ngOnInit() {
    const cart$ = await this.cartService.getCart();
    cart$.subscribe(cart => {
      this.totalItemsInCart = cart.totalItemsQuantity;
    });

  }

  logout() {
    this.authService.logout();
  }

  
}
