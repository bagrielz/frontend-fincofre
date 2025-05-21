import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../../shared/secondary-button/secondary-button.component';
import { TabsComponent } from '../tabs/tabs.component';
import { TableHeadComponent } from './table-head/table-head.component';
import { TableBodyComponent } from './table-body/table-body.component';

@Component({
  selector: 'app-table',
  imports: [
    TabsComponent,
    SecondaryButtonComponent,
    TableHeadComponent,
    TableBodyComponent,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {}
