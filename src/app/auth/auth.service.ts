
import {of as observableOf,  Observable } from 'rxjs';

import {switchMap} from 'rxjs/operators';
import { UserService } from './user/user.service';
import { User } from './user/user.model';
import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  authState$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, 
              private activatedRoute: ActivatedRoute,
              private userService: UserService) {
    this.authState$ = afAuth.authState;
   }

  login() {
    const returnUrl = this.activatedRoute.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
   this.afAuth.auth.signOut();
  }

  get user$(): Observable<User> {
    return this.authState$.pipe(
              switchMap(firebaseUser => {
                if (firebaseUser) return this.userService.get(firebaseUser.uid);
                else return observableOf(null);
              }));
  }

}
