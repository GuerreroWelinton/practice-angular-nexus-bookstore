import { Injectable, signal } from '@angular/core';
import { BOOKS } from '../constants/books-mock';

@Injectable({
  providedIn: 'root',
})
export class BooksApiMock {
  protected readonly books = signal(BOOKS);

  // TODO: 8. Implement book filter logic here and save filters in localStorage

  getBooks() {
    return this.books.asReadonly();
  }
}
