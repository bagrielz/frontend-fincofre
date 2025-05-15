import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { PrimaryButtonComponent } from '../../shared/primary-button/primary-button.component';

@Component({
  selector: 'app-table',
  imports: [TitleComponent, PrimaryButtonComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {}
