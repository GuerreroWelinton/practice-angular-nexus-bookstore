import { Component } from '@angular/core';

import { BookFilters } from './components/book-filters/book-filters';
import { BookGrid } from './components/book-grid/book-grid';
import { Cart } from './components/cart/cart';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Modal } from './components/modal/modal';
import { Sidebar } from './components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, BookFilters, BookGrid, Cart, Modal, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
