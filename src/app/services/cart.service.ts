import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];

  constructor() {}

  addToCart(product: Product) {
    const existingProduct = this.cart.find(item => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  getCart(): Product[] {
    return this.cart;
  }

  removeFromCart(product: Product) {
    this.cart = this.cart.filter(item => item.name !== product.name);
  }

  clearCart() {
    this.cart = [];
  }
}
