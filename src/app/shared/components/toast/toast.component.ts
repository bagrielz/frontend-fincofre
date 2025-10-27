import { Component, input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CurrencyPipe, NgClass } from '@angular/common';
import { SpentService } from '../../../core/services/spent.service';
import { Router } from '@angular/router';
import { SelectionService } from '../../../core/services/selection.service';

@Component({
  selector: 'app-toast',
  imports: [ButtonComponent, CurrencyPipe, NgClass],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
})
export class ToastComponent {
  total = input.required<number>();
  quantity = input.required<number>();
  spents = input.required<number[]>();

  constructor(
    private router: Router,
    private spentService: SpentService,
    private selectionService: SelectionService
  ) {}

  updateClickSpent(id: number[]) {
    if (id === null) {
      console.error('Array de ID vazio');
    }

    const spentId = id[0];

    this.router.navigate(['/editar-gasto', spentId]);
  }

  deleteClickSpent(spentsList: number[]) {
    if (spentsList === null) {
      console.error('Array de ID vazio');
    }

    const spentId = spentsList[0];

    this.spentService.deleteSpent(spentId).subscribe({
      next: () => {
        this.spentService.getAllSpents();
        this.selectionService.clearSelection();
      },
      error: (err) => {
        console.error('Erro ao deletar gasto:', err);
      },
    });
  }
}
