import { Component, input } from '@angular/core';

type TextValue = { title: string; highlight: string | '' };

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css',
})
export class TitleComponent {
  value = input.required<TextValue>();
}
