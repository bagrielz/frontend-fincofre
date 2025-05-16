import { Component } from '@angular/core';
import { SingleTabComponent } from './single-tab/single-tab.component';

@Component({
  selector: 'app-tabs',
  imports: [SingleTabComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
})
export class TabsComponent {}
