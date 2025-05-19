import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../../shared/secondary-button/secondary-button.component';
import { TabsComponent } from '../tabs/tabs.component';
import { TableHeadComponent } from './table-head/table-head.component';

@Component({
  selector: 'app-table-container',
  imports: [TabsComponent, SecondaryButtonComponent, TableHeadComponent],
  templateUrl: './table-container.component.html',
  styleUrl: './table-container.component.css',
})
export class TableContainerComponent {}
