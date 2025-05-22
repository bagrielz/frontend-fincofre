import { Component } from '@angular/core';
import { TableComponent } from './table/table.component';
import { TitleComponent } from './title/title.component';
import { ToastComponent } from '../shared/toast/toast.component';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-dashboard',
  imports: [TableComponent, TitleComponent, ToastComponent, ButtonComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
