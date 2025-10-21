import { CurrencyPipe } from '@angular/common';
import { Component, input, output } from '@angular/core';

import { FeatherIcon } from '../feather-icon/feather-icon';

import { ShoppingCartItem } from '../../interfaces/shopping-cart-interface';

@Component({
  selector: 'nexus-cart-item',
  imports: [FeatherIcon, CurrencyPipe],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.css',
})
export class CartItem {
  protected readonly baseImagePath: string = 'assets/images/books/';

  item = input.required<ShoppingCartItem>();

  displayBookDetails = output<ShoppingCartItem>();
  increaseQuantity = output<ShoppingCartItem>();
  decreaseQuantity = output<ShoppingCartItem>();
  removeFromCart = output<ShoppingCartItem>();
}
