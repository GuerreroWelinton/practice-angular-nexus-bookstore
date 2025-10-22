import { Component } from '@angular/core';

import { BookGrid } from './components/book-grid/book-grid';
import { Cart } from './components/cart/cart';
import { Faqs } from './components/faqs/faqs';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Modal } from './components/modal/modal';
import { Sidebar } from './components/sidebar/sidebar';
import { BookFilters } from './components/book-filters/book-filters';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, BookFilters, BookGrid, Cart, Modal, Sidebar, Faqs],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
