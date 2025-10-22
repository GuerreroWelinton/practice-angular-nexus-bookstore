import { computed, Injectable, signal } from '@angular/core';

import { Book } from '../interfaces/book-interface';
import { ShoppingCartItem } from '../interfaces/shopping-cart-interface';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCart {
  protected readonly cartItems = signal<ShoppingCartItem[]>([]);
  // TODO: 4. Add total price signal here and implement in sidebar cart component

  // TODO: 5. Save cart in localStorage with effect to cartItems
  readonly totalCartItems = computed(() =>
    this.cartItems().reduce((total, item) => total + item.quantity, 0),
  );

  getCartItems() {
    return this.cartItems.asReadonly();
  }

  isBookInCart(bookId: number) {
    return this.cartItems().some((item) => item.book.id === bookId);
  }

  addToCart(book: Book) {
    if (!this.isBookInCart(book.id)) {
      this.cartItems.update((items) => [...items, { book, quantity: 1 }]);
      return;
    }

    this.cartItems.update((items) =>
      items.map((item) =>
        item.book.id === book.id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  removeFromCart(bookId: number) {
    this.cartItems.update((items) => items.filter((item) => item.book.id !== bookId));
  }

  increaseQuantity(bookId: number) {
    this.cartItems.update((items) =>
      items.map((item) =>
        item.book.id === bookId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  decreaseQuantity(bookId: number) {
    this.cartItems.update((items) =>
      items.map((item) =>
        item.book.id === bookId ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item,
      ),
    );
  }
}
