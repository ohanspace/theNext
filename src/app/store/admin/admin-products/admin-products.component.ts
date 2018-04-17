import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {
    productService.getAll()
      .subscribe(products => this.products = products);
  }

  ngOnInit() {
  }

}
