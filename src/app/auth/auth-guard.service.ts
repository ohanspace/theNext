import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService
      .authState$
      .map(user => {
        if (user) {return true; }

        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        return false;
    });
  }
}
