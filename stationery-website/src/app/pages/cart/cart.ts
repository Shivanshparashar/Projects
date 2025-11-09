import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/product.model';
import { CartService, CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  // simple tax/shipping rules for demo
  private readonly TAX_RATE = 0.07; // 7%
  private readonly SHIPPING_THRESHOLD = 50; // free shipping over $50
  private readonly SHIPPING_FLAT = 5; // $5 flat otherwise

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.reloadCart();
  }

  private reloadCart(): void {
    this.cartItems = this.cartService.getCart().map((item: CartItem) => ({
      ...item,
      quantity: item.quantity ?? 1
    }));
  }

  // Remove item from cart by product id
  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.reloadCart();
  }

  // Called when quantity input changes
  updateQuantity(productId: number, qty: number): void {
    const q = Math.max(1, Math.floor(Number(qty) || 0));
    this.cartService.updateQuantity(productId, q);
    this.reloadCart();
  }

  // Calculate subtotal (items only)
  getSubtotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // tax amount
  getTax(): number {
    return Math.round(this.getSubtotal() * this.TAX_RATE * 100) / 100;
  }

  // shipping cost
  getShipping(): number {
    const subtotal = this.getSubtotal();
    return subtotal === 0 ? 0 : (subtotal >= this.SHIPPING_THRESHOLD ? 0 : this.SHIPPING_FLAT);
  }

  // final total
  getFinalTotal(): number {
    return Math.round((this.getSubtotal() + this.getTax() + this.getShipping()) * 100) / 100;
  }
}
