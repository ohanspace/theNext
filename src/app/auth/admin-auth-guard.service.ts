import { Observable } from 'rxjs/Observable';
import { UserService } from './user/user.service';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
      return this.authService.user$
        .switchMap(firebaseUser => {
          return this.userService.get(firebaseUser.uid);
        })
        .map(user => {
          return user.isAdmin;
        });
  }
  
}