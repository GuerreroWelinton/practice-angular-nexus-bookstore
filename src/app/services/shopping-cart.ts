import { computed, effect, Injectable, signal } from '@angular/core';
import { Book } from '../interfaces/book-interface';
import { ShoppingCartItem } from '../interfaces/shopping-cart-interface';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCart {
  protected readonly cartItems = signal<ShoppingCartItem[]>(this.getCartItemsFromLocalStorage());

  readonly totalCartItems = computed<number>(() =>
    this.cartItems().reduce((total, item) => total + item.quantity, 0),
  );

  readonly subTotalPrice = computed<number>(() =>
    this.cartItems().reduce((total, item) => total + item.book.price * item.quantity, 0),
  );

  readonly totalDiscount = computed<number>(() =>
    this.cartItems().reduce((total, item) => total + this.computeItemDiscount(item), 0),
  );

  readonly totalPrice = computed<number>(() => this.subTotalPrice() - this.totalDiscount());

  constructor() {
    effect(() => {
      localStorage.setItem('shoppingCart', JSON.stringify(this.cartItems()));
    });
  }

  protected getCartItemsFromLocalStorage(): ShoppingCartItem[] {
    const storedCart = localStorage.getItem('shoppingCart');
    return storedCart ? JSON.parse(storedCart) : [];
  }

  protected computeItemDiscount(cartItem: ShoppingCartItem): number {
    const { book, quantity } = cartItem;
    if (book.discountPercentage && book.discountedPrice) {
      return (book.price - book.discountedPrice) * quantity;
    }
    return 0;
  }

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
