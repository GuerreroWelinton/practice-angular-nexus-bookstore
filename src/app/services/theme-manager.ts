import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeManager {
  readonly themes = ['light', 'dark'];
  readonly currentTheme = signal<string>(this.getCurrentTheme());

  // TODO: 6. Add effect for save currentTheme in localStorage

  getCurrentTheme(): string {
    return document.body.getAttribute('data-bs-theme') || this.getBrowserTheme();
  }

  getBrowserTheme(): string {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  }

  setDefaultTheme(): void {
    document.body.setAttribute('data-bs-theme', this.currentTheme());
  }

  toggleTheme(): void {
    const currentTheme = document.body.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-bs-theme', newTheme);
    this.currentTheme.set(newTheme);
  }
}
