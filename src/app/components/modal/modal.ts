import { CurrencyPipe } from '@angular/common';
import { Component, effect, ElementRef, inject, viewChild } from '@angular/core';

import { ModalManager } from '../../services/modal-manager';

import { Book } from '../../interfaces/book-interface';

@Component({
  selector: 'nexus-modal',
  imports: [CurrencyPipe],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  protected readonly modalManager = inject<ModalManager<Book>>(ModalManager);
  protected readonly data = this.modalManager.getData();

  openModalButton = viewChild<ElementRef<HTMLButtonElement>>('openModalButton');
  modalElement = viewChild<ElementRef<HTMLDivElement>>('modalElement');

  constructor() {
    effect(() => {
      if (this.modalManager.isOpen()) {
        this.openModal();
      }
    });
  }

  openModal() {
    this.openModalButton()?.nativeElement.click();
  }

  close() {
    this.modalManager.closeModal();
  }
}
