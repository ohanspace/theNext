import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products: Product[];
  dataSource;
  displayedColumns = ['name', 'price', 'edit'];

  constructor(private productService: ProductService) {
    productService.getAll()
      .subscribe(products => this.dataSource = new MatTableDataSource(products));
  }

  ngOnInit() {
  }

}
