import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {

  constructor(private afDb: AngularFireDatabase) { }

  save(user: firebase.User) {
    this.afDb.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

}
