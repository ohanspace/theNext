
import {take} from 'rxjs/operators';
import { of ,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { ProductService } from 'app/store/shared/services/product.service';

import { Product } from './../models/product.model';

@Injectable()
export class ProductsResolver implements Resolve<Product[]> {
  constructor(private productService: ProductService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product[]> {
    console.log('resolving products...');
    return this.productService.getAll().pipe(take(1));
  }
}
