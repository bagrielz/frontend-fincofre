import { Component } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { TitleComponent } from '../../components/title/title.component';
import { ToastComponent } from '../../components/toast/toast.component';
import { ButtonComponent } from '../../components/shared/button/button.component';

@Component({
  selector: 'app-dashboard',
  imports: [TableComponent, TitleComponent, ToastComponent, ButtonComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
