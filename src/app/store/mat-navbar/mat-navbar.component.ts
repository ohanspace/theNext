import { User } from './../../auth/user/user.model';
import { AuthService } from './../../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { ShoppingCartService } from '../service/shopping-cart.service';
@Component({
  selector: 'app-mat-navbar',
  templateUrl: './mat-navbar.component.html',
  styleUrls: ['./mat-navbar.component.css']
})
export class MatNavbarComponent implements OnInit {
  user: User;
  totalItemsInCart: number;
  
  constructor(private authService: AuthService,
    private cartService: ShoppingCartService) {
      this.authService.user$.subscribe(user => this.user = user);
  }
    
    
  async ngOnInit() {
    const totalItemsInCart$ = await this.cartService.getTotalQuantity();
    totalItemsInCart$.subscribe(total => this.totalItemsInCart = total);
  }

  logout() {
    this.authService.logout();
  }
}
