import { Component } from '@angular/core';
import { TableComponent } from '../components/table/table.component';
import { TitleComponent } from '../../../shared/components/title/title.component';
import { ToastComponent } from '../../../shared/components/toast/toast.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-dashboard',
  imports: [TableComponent, TitleComponent, ToastComponent, ButtonComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
