
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from '../models/product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(private afDb: AngularFireDatabase) { }

  getAll(): Observable<Product[]> {
    return  this.afDb.list('/products')
      .snapshotChanges().pipe(
      map(items => 
        items.map(item => 
          ({id: item.key, ...item.payload.val()})
        )));
  }

  create(product: Product) {
    this.afDb.list('/products').push(product);
  }

  get(productId: string): Observable<Product> {
    return <Observable<Product>> this.afDb.object('/products/' + productId)
                    .valueChanges();
  }

  update(productId, product) {
    this.afDb.object('/products/' + productId)
        .update(product);
  }

  delete(productId) {
    console.log('deleting item ' + '/products/' + productId);
    this.afDb.object('/products/' + productId).remove();
  }

}
