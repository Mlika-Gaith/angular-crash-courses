import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  // data from parent to child component
  @Input() product!: Product;
  // data from child to parent component
  // EventEmitter is used to emit an event when the value of notify me changes
  @Output() notify = new EventEmitter();
}
