import { Component, inject } from '@angular/core';

import { CartItem } from '../cart-item/cart-item';

import { ShoppingCart } from '../../services/shopping-cart';
import { ModalManager } from './../../services/modal-manager';

import { Book } from '../../interfaces/book-interface';
import { ShoppingCartItem } from '../../interfaces/shopping-cart-interface';

@Component({
  selector: 'nexus-cart',
  imports: [CartItem],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  protected readonly shoppingCart = inject(ShoppingCart);
  protected readonly modalManager = inject<ModalManager<Book>>(ModalManager);

  protected readonly items = this.shoppingCart.getCartItems();

  displayBookDetails(item: ShoppingCartItem) {
    this.modalManager.openBookDetailsModal(item.book);
  }

  increaseQuantity(item: ShoppingCartItem) {
    this.shoppingCart.increaseQuantity(item.book.id);
  }

  decreaseQuantity(item: ShoppingCartItem) {
    this.shoppingCart.decreaseQuantity(item.book.id);
  }

  removeFromCart(item: ShoppingCartItem) {
    this.shoppingCart.removeFromCart(item.book.id);
  }
}
