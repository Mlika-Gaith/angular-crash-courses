import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from 'src/app/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(private activatedRoute: ActivatedRoute) {}
  // executes first when the component is rendered
  ngOnInit(): void {
    // extract product id from the current route
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const productId = Number(routeParams.get('productId'));

    // find the corresponding product
    this.product = products.find((product) => product.id === productId);
  }
}
