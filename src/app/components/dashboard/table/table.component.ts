import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-table',
  imports: [TitleComponent, ButtonComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {}
