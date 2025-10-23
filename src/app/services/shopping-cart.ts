import { computed, Injectable, signal } from '@angular/core';
import { Book } from '../interfaces/book-interface';
import { ShoppingCartItem } from '../interfaces/shopping-cart-interface';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCart {
  protected readonly cartItems = signal<ShoppingCartItem[]>([]);

  readonly totalCartItems = computed<number>(() =>
    this.cartItems().reduce((total, item) => total + item.quantity, 0),
  );

  readonly subTotalPrice = computed<number>(() =>
    this.cartItems().reduce((total, item) => total + item.book.price * item.quantity, 0),
  );

  readonly totalDiscount = computed<number>(() =>
    this.cartItems().reduce(
      (total, { book, quantity }) =>
        total +
        (book.discountPercentage && book.discountedPrice ? book.price - book.discountedPrice : 0) *
          quantity,
      0,
    ),
  );

  readonly totalPrice = computed<number>(() => this.subTotalPrice() - this.totalDiscount());

  // TODO: 5. Save cart in localStorage with effect to cartItems

  getCartItems() {
    return this.cartItems.asReadonly();
  }

  protected isBookInCart(bookId: number) {
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
