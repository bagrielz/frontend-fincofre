import { Component, input } from '@angular/core';
import { SelectionService } from '../../../core/services/selection.service';
import { Spent } from '../../models/spent.model';

@Component({
  selector: 'app-checkbox',
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css',
})
export class CheckboxComponent {
  data = input.required<Spent>();
  checked = input<boolean>();

  constructor(private selectionService: SelectionService) {}

  isChecked(): boolean {
    return this.selectionService.isSelected(this.data());
  }

  onChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectionService.toggleSelection(this.data(), input.checked);
  }
}
