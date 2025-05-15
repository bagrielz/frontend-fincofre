import { Component } from '@angular/core';
import { TitleComponent } from './title/title.component';

@Component({
  selector: 'app-dashboard',
  imports: [TitleComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
