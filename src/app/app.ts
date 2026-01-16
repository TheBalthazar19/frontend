import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterLink],
  template: `
  <h2 style="text-align:center">Product Admin</h2>
  <nav style="text-align: center;margin-bottom: 20px;">
  <a routerLink="/add">Add Product</a>
  <a routerLink="/display">Display Product</a>
  </nav>
  <router-outlet></router-outlet>
  `
})
export class App {}
