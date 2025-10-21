import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';

import { FeatherIcon } from '../feather-icon/feather-icon';

import { ShoppingCart } from '../../services/shopping-cart';

@Component({
  selector: 'nexus-header',
  imports: [FeatherIcon, NgTemplateOutlet],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected readonly shoopingCart = inject(ShoppingCart);

  totalItemsInCart = this.shoopingCart.totalCartItems;
}
