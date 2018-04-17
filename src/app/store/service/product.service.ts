import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(private afDb: AngularFireDatabase) { }

  getAll(): Observable<Product[]> {
    return <Observable<Product[]>> this.afDb.list('/products').valueChanges();
  }
  create(product: Product) {
    this.afDb.list('/products').push(product);
  }

}
