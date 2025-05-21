import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../shared/button/secondary-button/secondary-button.component';

@Component({
  selector: 'app-header',
  imports: [SecondaryButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
