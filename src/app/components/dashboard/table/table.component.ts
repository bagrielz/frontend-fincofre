import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../../shared/button/secondary-button/secondary-button.component';
import { TabsComponent } from '../tabs/tabs.component';
import { TableHeadComponent } from './table-head/table-head.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { TableFooterComponent } from './table-footer/table-footer.component';

@Component({
  selector: 'app-table',
  imports: [
    TabsComponent,
    SecondaryButtonComponent,
    TableHeadComponent,
    TableBodyComponent,
    TableFooterComponent,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {}
