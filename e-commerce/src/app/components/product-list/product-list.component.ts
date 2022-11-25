import { Component } from '@angular/core';
import { products } from 'src/app/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
  // when the child component emits notify event this is executed
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
