import { Component } from '@angular/core';
import { CheckboxComponent } from '../../shared/checkbox/checkbox.component';

@Component({
  selector: 'app-table-body',
  imports: [CheckboxComponent],
  templateUrl: './table-body.component.html',
  styleUrl: './table-body.component.css',
})
export class TableBodyComponent {
  data = [
    '01/01/2025',
    'Gasto exemplo',
    'Agendado',
    'R$ 4,90',
    'Internet',
    'Nubank',
    'Fixo',
    'Crédito',
  ];
}
