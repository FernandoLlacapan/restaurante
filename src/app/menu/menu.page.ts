import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {
  products: { [category: string]: Product[] } = {
    bebidas: [
      { name: 'Bebida 500 ml', price: 1290, image: 'assets/images/liquidos/bebida-500ml.jpg', quantity: 0 },
      // Otros productos
    ],
    // Más categorías
  };
  
  productCategories: string[] = Object.keys(this.products) as string[];
  


  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    console.log(`Producto ${product.name} añadido al carrito`);
  }

  
}
