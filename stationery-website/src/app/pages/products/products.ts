import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../../components/product-card/product-card';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  // inlined template so the compiler can statically detect ProductCardComponent usage
  template: `
    <section class="products" id="products">
      <h2>Our Featured Products</h2>
      <p class="section-subtitle">Explore our carefully curated stationery, art supplies, and desk organizers to inspire your creativity.</p>

      <div class="grid">
        <ng-container *ngFor="let product of products">
          <app-product-card [product]="product"></app-product-card>
        </ng-container>
      </div>
    </section>
  `,
  styleUrls: ['./products.scss'],
})
export class Products {
  products = [] as any[];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
}
