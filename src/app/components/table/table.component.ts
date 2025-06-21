import { Component } from '@angular/core';
import { TableHeadComponent } from './table-head/table-head.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { TableFooterComponent } from './table-footer/table-footer.component';
import { TabsComponent } from '../shared/tabs/tabs.component';
import { ButtonComponent } from '../../shared/components/button/button.component';

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
