import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ShoppingCart } from '../../services/shopping-cart';
import { ThemeManager } from '../../services/theme-manager';
import { FeatherIcon } from '../feather-icon/feather-icon';

@Component({
  selector: 'nexus-header',
  imports: [FeatherIcon, NgTemplateOutlet],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected readonly shoopingCart = inject(ShoppingCart);
  protected readonly themeManager = inject(ThemeManager);

  readonly totalItemsInCart = this.shoopingCart.totalCartItems;
  readonly currentTheme = this.themeManager.getCurrentTheme();

  toggleTheme(): void {
    this.themeManager.toggleTheme();
  }
}
