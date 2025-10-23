import { Component, effect, ElementRef, inject, viewChild } from '@angular/core';
import { Book } from '../../interfaces/book-interface';
import { ModalManager } from '../../services/modal-manager';

@Component({
  selector: 'nexus-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  protected readonly modalManager = inject<ModalManager<Book>>(ModalManager);
  protected readonly book = this.modalManager.getData();

  readonly openModalButton = viewChild<ElementRef<HTMLButtonElement>>('openModalButton');
  readonly modalElement = viewChild<ElementRef<HTMLDivElement>>('modalElement');

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
