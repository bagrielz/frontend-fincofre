import { Component } from '@angular/core';
import { TableComponent } from './table/table.component';
import { TitleComponent } from './title/title.component';
import { PrimaryButtonComponent } from '../shared/button/primary-button/primary-button.component';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    TableComponent,
    TitleComponent,
    PrimaryButtonComponent,
    ToastComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
