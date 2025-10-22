import { Component } from '@angular/core';
import { HERO_ITEMS } from '../../constants/hero-mock';
import { HeroItem } from '../../interfaces/hero-interface';

@Component({
  selector: 'nexus-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  readonly heroItems: HeroItem[] = HERO_ITEMS;
}
