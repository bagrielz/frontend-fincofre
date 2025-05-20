import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../../shared/secondary-button/secondary-button.component';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-table',
  imports: [TabsComponent, SecondaryButtonComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {}
