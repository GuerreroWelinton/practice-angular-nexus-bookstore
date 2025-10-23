import { computed, Injectable, signal } from '@angular/core';
import { BOOKS } from '../constants/books-mock';
import { Book } from '../interfaces/book-interface';

@Injectable({
  providedIn: 'root',
})
export class BooksApiMock {
  protected readonly books = signal<Book[]>(BOOKS);

  protected readonly formattedBooks = computed<Book[]>(() =>
    this.books().map((book) => ({
      ...book,
      discountedPrice: this.calculateDiscountedPrice(book.price, book.discountPercentage),
    })),
  );

  getBooks() {
    return this.formattedBooks;
  }

  calculateDiscountedPrice(price: number, discountPercentage?: number): number {
    if (!discountPercentage) return 0;
    return +(price - (price * discountPercentage) / 100);
  }
}
