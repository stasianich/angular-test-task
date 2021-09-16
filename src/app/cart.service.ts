import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cart: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    this.cart.push(product);
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];

    return this.cart;
  }
}