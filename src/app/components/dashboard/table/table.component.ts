import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../../shared/secondary-button/secondary-button.component';
import { TabsComponent } from '../tabs/tabs.component';
import { CheckboxComponent } from '../../shared/checkbox/checkbox.component';

@Component({
  selector: 'app-table',
  imports: [TabsComponent, SecondaryButtonComponent, CheckboxComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  columns = [
    { field: 'Data', image: 'icons/calendar.svg' },
    { field: 'Gasto', image: 'icons/arrow-down-circle.svg' },
    { field: 'Status', image: 'icons/loader.svg' },
    { field: 'Valor', image: 'icons/shopping-cart.svg' },
    { field: 'Categoria', image: 'icons/list.svg' },
    { field: 'Conta', image: 'icons/piggy-bank.svg' },
    { field: 'Tipo', image: 'icons/banknote.svg' },
    { field: 'Forma', image: 'icons/credit-card.svg' },
  ];
}
