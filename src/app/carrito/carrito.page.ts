import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage {
  cartItems: Product[] = [];

  constructor(private cartService: CartService) {}

  ionViewWillEnter() {
    this.cartItems = this.cartService.getCart();
  }

  removeItem(product: Product) {
    this.cartService.removeFromCart(product);
    this.cartItems = this.cartService.getCart();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  calculateTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 0), 0);
  }
}
