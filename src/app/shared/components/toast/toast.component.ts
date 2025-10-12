import { Component, input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CurrencyPipe } from '@angular/common';
import { SpentService } from '../../../core/services/spent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toast',
  imports: [ButtonComponent, CurrencyPipe],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
})
export class ToastComponent {
  total = input.required<number>();
  quantity = input.required<number>();
  spents = input.required<number[]>();

  // spentId!: number | undefined;
  // token!: string | null;
  // spentResponse$!: Observable<Spent | null>;

  constructor(private router: Router) {}

  updateClickSpent(id: number[]) {
    if (id === null) {
      console.error('Array de ID vazio');
    }

    const spentId = id[0];

    this.router.navigate(['/editar-gasto', spentId]);
  }
}
