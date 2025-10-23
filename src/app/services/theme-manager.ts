import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeManager {
  protected readonly themes = ['light', 'dark'];
  protected readonly currentTheme = signal<string>(this.getDefaultTheme());

  // TODO: 6. Add effect for save currentTheme in localStorage

  constructor() {
    this.setDefaultTheme();
  }

  protected getDefaultTheme(): string {
    return document.body.getAttribute('data-bs-theme') || this.getBrowserTheme();
  }

  protected getBrowserTheme(): string {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  }

  protected setDefaultTheme(): void {
    document.body.setAttribute('data-bs-theme', this.currentTheme());
  }

  getCurrentTheme() {
    return this.currentTheme.asReadonly();
  }

  toggleTheme(): void {
    const currentTheme = document.body.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-bs-theme', newTheme);
    this.currentTheme.set(newTheme);
  }
}
