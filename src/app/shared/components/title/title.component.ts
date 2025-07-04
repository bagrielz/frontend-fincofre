import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

type Value = {
  text?: string;
  highlight?: string;
};

@Component({
  selector: 'app-title',
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css',
})
export class TitleComponent {
  value = input.required<Value>();
}
