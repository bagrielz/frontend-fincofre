import { Component } from '@angular/core';
import { TableContainerComponent } from './table-container/table-container.component';
import { TitleComponent } from './title/title.component';
import { PrimaryButtonComponent } from '../shared/primary-button/primary-button.component';

@Component({
  selector: 'app-dashboard',
  imports: [TableContainerComponent, TitleComponent, PrimaryButtonComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
