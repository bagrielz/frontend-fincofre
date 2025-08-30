import { Component } from '@angular/core';
import { TableHeadComponent } from './table-head/table-head.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { TableFooterComponent } from './table-footer/table-footer.component';
import { ButtonComponent } from '../button/button.component';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-table',
  imports: [
    TabsComponent,
    TableHeadComponent,
    TableBodyComponent,
    TableFooterComponent,
    ButtonComponent,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {}
