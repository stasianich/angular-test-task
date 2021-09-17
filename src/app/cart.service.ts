import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

type ShippingData = {
  type: string,
  price: number
}

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cart: Product[] = [];

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product: Product) {
    this.cart.push(product);
  }

  getItems() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];

    return this.cart;
  }

  getShippingPrices() {
    return this.http.get<ShippingData[]>('/assets/shipping.json');
  }
}
