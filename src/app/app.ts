import { Component } from '@angular/core';

import { BookFilters } from './components/book-filters/book-filters';
import { BookGrid } from './components/book-grid/book-grid';
import { Cart } from './components/cart/cart';
import { Faqs } from './components/faqs/faqs';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Modal } from './components/modal/modal';
import { Sidebar } from './components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, BookFilters, BookGrid, Cart, Modal, Sidebar, Faqs, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
