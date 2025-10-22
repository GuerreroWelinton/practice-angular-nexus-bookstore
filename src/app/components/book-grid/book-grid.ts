import { Component, inject } from '@angular/core';

import { Book } from '../../interfaces/book-interface';

import { BooksApiMock } from '../../services/books-api-mock';
import { ModalManager } from '../../services/modal-manager';
import { ShoppingCart } from '../../services/shopping-cart';

import { BookCard } from '../book-card/book-card';

@Component({
  selector: 'nexus-book-grid',
  imports: [BookCard],
  templateUrl: './book-grid.html',
  styleUrl: './book-grid.css',
})
export class BookGrid {
  protected readonly bookService = inject(BooksApiMock);
  protected readonly modalManager = inject<ModalManager<Book>>(ModalManager);
  protected readonly shoppingCart = inject(ShoppingCart);

  protected readonly books = this.bookService.getBooks();

  addToCart(book: Book) {
    this.shoppingCart.addToCart(book);
  }

  addToFavorites(book: Book) {
    // TODO: Implement favorites functionality
  }

  displayBookDetails(book: Book) {
    this.modalManager.openBookDetailsModal(book);
  }
}
