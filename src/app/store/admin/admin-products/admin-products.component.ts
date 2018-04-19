import { ProductService } from './../../service/product.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements AfterViewInit {
  products: Product[];
  dataSource = new MatTableDataSource<Product>();
  displayedColumns = ['name', 'price', 'edit'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private productService: ProductService) {
    productService.getAll()
    .subscribe(products => 
      this.dataSource.data = products
    );
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
  }
   

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
