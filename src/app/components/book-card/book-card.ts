import { CurrencyPipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Book } from '../../interfaces/book-interface';
import { FeatherIcon } from '../feather-icon/feather-icon';

@Component({
  selector: 'nexus-book-card',
  imports: [CurrencyPipe, FeatherIcon],
  templateUrl: './book-card.html',
  styleUrl: './book-card.css',
})
export class BookCard {
  protected readonly baseImagePath: string = 'assets/images/books/';

  book = input.required<Book>();

  addToCart = output<Book>();
  addToFavorites = output<Book>();
  viewDetails = output<Book>();
}
