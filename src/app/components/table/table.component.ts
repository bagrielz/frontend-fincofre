import { Component } from '@angular/core';
import { TabsComponent } from '../shared/tabs/tabs.component';
import { TableHeadComponent } from './table-head/table-head.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { TableFooterComponent } from './table-footer/table-footer.component';
import { ButtonComponent } from '../shared/button/button.component';
import { CustomBackgroundComponent } from '../shared/custom-background/custom-background.component';

@Component({
  selector: 'app-table',
  imports: [
    TabsComponent,
    TableHeadComponent,
    TableBodyComponent,
    TableFooterComponent,
    ButtonComponent,
    CustomBackgroundComponent,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {}
