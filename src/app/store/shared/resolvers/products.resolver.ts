import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { ProductService } from 'app/store/shared/services/product.service';
import { Observable } from 'rxjs/Observable';

import { Product } from './../models/product.model';

@Injectable()
export class ProductsResolver implements Resolve<Product[]> {
  constructor(private productService: ProductService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product[]> {
    console.log('resolving products...');
    return this.productService.getAll().take(1);
  }
}
