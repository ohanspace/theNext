import { AuthService } from './../../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-mat-navbar',
  templateUrl: './mat-navbar.component.html',
  styleUrls: ['./mat-navbar.component.css']
})
export class MatNavbarComponent {
  user$: Observable<firebase.User>;

  constructor(private authService: AuthService) {
    this.user$ = this.authService.user$;
  }

  logout() {
    this.authService.logout();
  }
}
