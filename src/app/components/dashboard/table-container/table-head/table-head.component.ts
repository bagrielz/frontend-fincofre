import { Component } from '@angular/core';

@Component({
  selector: 'app-table-head',
  imports: [],
  templateUrl: './table-head.component.html',
  styleUrl: './table-head.component.css',
})
export class TableHeadComponent {
  columns = [
    { field: 'Data', image: 'icons/calendar.svg' },
    { field: 'Gasto', image: 'icons/arrow-down-circle.svg' },
    { field: 'Status', image: 'icons/loader.svg' },
    { field: 'Valor', image: 'icons/shopping-cart.svg' },
    { field: 'Categorias', image: 'icons/list.svg' },
    { field: 'Conta', image: 'icons/piggy-bank.svg' },
    { field: 'Tipo', image: 'icons/banknote.svg' },
    { field: 'Forma', image: 'icons/credit-card.svg' },
  ];
}
