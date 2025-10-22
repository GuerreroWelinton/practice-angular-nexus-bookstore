import { Component } from '@angular/core';
import { FAQ_ITEMS } from '../../constants/faqs-mock';
import { FaqItem } from '../../interfaces/faq-interface';

@Component({
  selector: 'nexus-faqs',
  imports: [],
  templateUrl: './faqs.html',
  styleUrl: './faqs.css',
})
export class Faqs {
  readonly faqs: FaqItem[] = FAQ_ITEMS;
}
