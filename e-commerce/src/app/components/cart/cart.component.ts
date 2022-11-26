import { Component } from '@angular/core';
import { Product } from 'src/app/products';
import { CartService } from 'src/app/services/cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: Product[] = this.cartService.getItems();

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  onSubmit(): void {
    // process checkout data
    this.cartItems = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
