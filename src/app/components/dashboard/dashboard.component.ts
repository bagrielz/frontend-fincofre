import { Component } from '@angular/core';
import { TableComponent } from './table/table.component';
import { TitleComponent } from './title/title.component';
import { PrimaryButtonComponent } from '../shared/primary-button/primary-button.component';

@Component({
  selector: 'app-dashboard',
  imports: [TableComponent, TitleComponent, PrimaryButtonComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
