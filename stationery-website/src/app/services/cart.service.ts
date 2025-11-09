import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

export interface CartItem extends Product {
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[] = [];

  // Add product to cart (increase quantity if it already exists)
  addToCart(product: Product, quantity: number = 1): void {
    const existingItem = this.cart.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({ ...product, quantity });
    }
  }

  // Get all cart items
  getCart(): CartItem[] {
    return this.cart;
  }

  // Remove a product from cart completely
  removeFromCart(productId: number): void {
    this.cart = this.cart.filter(item => item.id !== productId);
  }

  // Update quantity of a product
  updateQuantity(productId: number, quantity: number): void {
    const item = this.cart.find(i => i.id === productId);
    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) {
        this.removeFromCart(productId);
      }
    }
  }

  // Get total price
  getTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  // Clear the cart
  clearCart(): void {
    this.cart = [];
  }
}
