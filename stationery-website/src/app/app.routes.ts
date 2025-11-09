import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent) },
	{ path: 'products', loadComponent: () => import('./pages/products/products').then(m => m.Products) },
	{ path: 'cart', loadComponent: () => import('./pages/cart/cart').then(m => m.CartComponent) },
	{ path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About) },
	{ path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact) },
	{ path: '**', redirectTo: '' }
];
