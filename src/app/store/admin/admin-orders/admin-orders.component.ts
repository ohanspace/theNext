import { MatTableDataSource, MatDialog } from '@angular/material';
import { Order } from './../../models/order.model';
import { OrderService } from './../../service/order.service';
import { Component, OnInit } from '@angular/core';
import { OrderDetailDialogComponent } from '../../shared/order-detail-dialog/order-detail-dialog.component';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  orders: Order[] = [];
  displayedColumns = ['name', 'dateCreated', 'viewDetail'];
  dataSource = new MatTableDataSource<Order>();

  constructor(private orderService: OrderService, private dialog: MatDialog) {}

  ngOnInit() {
    this.orderService
      .getAll()
      .subscribe(orders => (this.dataSource.data = orders));
  }

  openOrderDetailDialog(order: Order) {
    const dialogRef = this.dialog.open(OrderDetailDialogComponent, {
      data: order
    });
  }
}
