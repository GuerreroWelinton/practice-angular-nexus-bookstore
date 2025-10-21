import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { FeatherIcon } from '../feather-icon/feather-icon';

import { ShoppingCart } from '../../services/shopping-cart';
import { ThemeManager } from '../../services/theme-manager';

@Component({
  selector: 'nexus-header',
  imports: [FeatherIcon, NgTemplateOutlet],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  protected readonly shoopingCart = inject(ShoppingCart);
  protected readonly themeManager = inject(ThemeManager);

  protected readonly totalItemsInCart = this.shoopingCart.totalCartItems;
  protected readonly currentTheme = this.themeManager.currentTheme;

  ngOnInit(): void {
    this.themeManager.setDefaultTheme();
  }

  toggleTheme(): void {
    this.themeManager.toggleTheme();
  }
}
