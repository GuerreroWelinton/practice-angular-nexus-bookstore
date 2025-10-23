import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Book } from '../../interfaces/book-interface';
import { ShoppingCartItem } from '../../interfaces/shopping-cart-interface';
import { ShoppingCart } from '../../services/shopping-cart';
import { CartItem } from '../cart-item/cart-item';
import { ModalManager } from './../../services/modal-manager';

@Component({
  selector: 'nexus-cart',
  imports: [CartItem, CurrencyPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  protected readonly shoppingCart = inject(ShoppingCart);
  protected readonly modalManager = inject<ModalManager<Book>>(ModalManager);

  protected readonly items = this.shoppingCart.getCartItems();

  protected readonly discount = this.shoppingCart.totalDiscount;
  protected readonly subTotalPrice = this.shoppingCart.subTotalPrice;
  protected readonly totalPrice = this.shoppingCart.totalPrice;

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
