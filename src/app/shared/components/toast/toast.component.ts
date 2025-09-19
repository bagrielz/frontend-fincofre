import { Component, input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Spent } from '../../models/spent.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-toast',
  imports: [ButtonComponent, CurrencyPipe],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
})
export class ToastComponent {
  total = input.required<number>();
  quantity = input.required<number>();
  spents = input<number[]>();

  updateClickSpent() {
    console.log('Botão clicado');
  }
}
