import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-single-tab',
  imports: [CommonModule],
  templateUrl: './single-tab.component.html',
  styleUrl: './single-tab.component.css',
})
export class SingleTabComponent {
  label = input.required<string>();
  index = input.required<number>();
  selected = input<boolean>();
  select = output<string>();

  selectTab() {
    let type = '';
    if (this.index() === 0) type = 'TODOS';
    if (this.index() === 1) type = 'FIXO';
    if (this.index() === 2) type = 'VARIÁVEL';

    this.select.emit(type);
  }
}
