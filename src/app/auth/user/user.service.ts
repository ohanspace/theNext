import { Observable } from 'rxjs/Observable';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {

  constructor(private afDb: AngularFireDatabase) { }

  save(user: firebase.User) {
    this.afDb.object('/users/' + user.uid).update({
      displayName: user.displayName,
      email: user.email
    });
  }

  get(uid: string): Observable<User> {
    return <Observable<User>> this.afDb.object('/users/' + uid).valueChanges();
  }

}
