import { Component } from '@angular/core';
import { Product } from 'src/app/products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: Product[] = this.cartService.getItems();
  constructor(private cartService: CartService) {}
}
