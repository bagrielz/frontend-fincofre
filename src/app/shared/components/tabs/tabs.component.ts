import { Component, output } from '@angular/core';
import { SingleTabComponent } from './single-tab/single-tab.component';

@Component({
  selector: 'app-tabs',
  imports: [SingleTabComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
})
export class TabsComponent {
  tabChange = output<string>();

  tabs = ['Todos', 'Gastos fixos', 'Gastos variáveis'];
  selectedTab = 0;

  onTabSelected(type: string, index: number) {
    this.selectedTab = index;
    this.tabChange.emit(type);
  }
}
