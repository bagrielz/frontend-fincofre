import { Component, input } from '@angular/core';
import { Pill } from '../../models/pill.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-method',
  imports: [CommonModule],
  templateUrl: './payment-method.component.html',
  styleUrl: './payment-method.component.css',
})
export class PaymentMethodComponent {
  props = input.required<Pill>();
}
