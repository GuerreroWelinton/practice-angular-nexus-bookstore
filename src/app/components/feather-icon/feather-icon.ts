import { Component, input } from '@angular/core';

@Component({
  selector: 'nexus-feather-icon',
  imports: [],
  templateUrl: './feather-icon.html',
  styleUrl: './feather-icon.css',
})
export class FeatherIcon {
  height = input<number>(20);
  width = input<number>(20);

  fill = input<string>('none');
  stroke = input<string>('currentColor');

  iconName = input.required<string>();
}
