import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-single-tab',
  imports: [CommonModule],
  templateUrl: './single-tab.component.html',
  styleUrl: './single-tab.component.css',
})
export class SingleTabComponent {
  tabs = ['Gastos fixos', 'Gastos variáveis'];
  selectedTab = 0;

  selectTab(index: number) {
    this.selectedTab = index;
  }
}
