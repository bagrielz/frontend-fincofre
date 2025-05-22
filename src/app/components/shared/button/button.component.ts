import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

type ButtonType = 'primary' | 'secondary' | 'danger';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  type = input.required<ButtonType>();
}
