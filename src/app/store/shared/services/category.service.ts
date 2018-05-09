
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CategoryService {

  constructor(private afDb: AngularFireDatabase) { }

  getAll(): Observable<Category[]> {
    return this.afDb.list('/product-categories', ref => ref.orderByChild('name'))
      .snapshotChanges().pipe(
      map(items => 
         items.map(item => ({id: item.key, ...item.payload.val()}))
      ));
  }

}
