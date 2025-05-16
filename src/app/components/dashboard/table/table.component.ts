import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { PrimaryButtonComponent } from '../../shared/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '../../shared/secondary-button/secondary-button.component';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-table',
  imports: [
    TabsComponent,
    TitleComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {}
