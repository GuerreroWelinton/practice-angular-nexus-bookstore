import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalManager<T> {
  protected readonly data = signal<T | null>(null);
  readonly isOpen = signal(false);

  getData() {
    return this.data.asReadonly();
  }

  openBookDetailsModal(data: T) {
    this.isOpen.set(true);
    this.data.set(data);
  }

  closeModal() {
    setTimeout(() => {
      this.isOpen.set(false);
      this.data.set(null);
    }, 300);
  }
}
