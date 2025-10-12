import { Injectable, signal } from '@angular/core';
import { Spent } from '../../shared/models/spent.model';

@Injectable({
  providedIn: 'root',
})
export class SelectionService {
  private _selectedSpents = signal<Spent[]>([]);
  selectedSpents = this._selectedSpents.asReadonly();

  toggleSelection(data: Spent, checked: boolean) {
    this._selectedSpents.update((spents) => {
      if (checked) {
        return [...spents, data];
      } else {
        return spents.filter((s) => s !== data);
      }
    });
  }

  clearSelection() {
    this._selectedSpents.set([]);
  }

  isSelected(spent: Spent): boolean {
    return this._selectedSpents().some((s) => s.id === spent.id);
  }
}
