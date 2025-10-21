import { Injectable, signal } from '@angular/core';
import { booksMock } from '../constants/books-mock';

@Injectable({
  providedIn: 'root',
})
export class BooksApiMock {
  protected readonly books = signal(booksMock);

  getBooks() {
    return this.books.asReadonly();
  }
}
