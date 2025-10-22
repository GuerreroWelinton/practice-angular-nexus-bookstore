import { Injectable, signal } from '@angular/core';
import { BOOKS } from '../constants/books-mock';

@Injectable({
  providedIn: 'root',
})
export class BooksApiMock {
  protected readonly books = signal(BOOKS);

  getBooks() {
    return this.books.asReadonly();
  }
}
