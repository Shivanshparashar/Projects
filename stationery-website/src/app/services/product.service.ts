import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Notebook', description: 'A4 lined notebook', price: 5.99, imageUrl: 'https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg', category: 'Writing' },
    { id: 2, name: 'Pen Set', description: 'Set of 10 ballpoint pens', price: 12.99, imageUrl: 'https://images.pexels.com/photos/1424495/pexels-photo-1424495.png', category: 'Writing' },
  { id: 3, name: 'Sticky Notes', description: 'Pack of colourful sticky notes', price: 3.49, imageUrl: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Organize' },
  { id: 4, name: 'Highlighter Set', description: 'Set of 6 pastel highlighters', price: 6.75, imageUrl: 'https://images.pexels.com/photos/6192757/pexels-photo-6192757.jpeg', category: 'Writing' },
  { id: 5, name: 'Sketchbook', description: 'A5 blank sketchbook for artists', price: 9.99, imageUrl: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Art' },
{ id: 6, name: 'Watercolor Set', description: '12 vibrant watercolor paints', price: 15.49, imageUrl: 'https://images.pexels.com/photos/6925146/pexels-photo-6925146.jpeg', category: 'Art' },
    { id: 7, name: 'Desk Organizer', description: 'Wooden desk organizer with compartments', price: 18.99, imageUrl: 'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Organize' },
    { id: 8, name: 'Fountain Pen', description: 'Elegant fountain pen with ink refill', price: 22.50, imageUrl:'https://images.pexels.com/photos/261450/pexels-photo-261450.jpeg', category: 'Writing' }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
