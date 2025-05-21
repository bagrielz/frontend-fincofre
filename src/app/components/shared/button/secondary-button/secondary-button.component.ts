import { Component } from '@angular/core';
import { ButtonComponent } from '../button.component';

@Component({
  selector: 'app-secondary-button',
  imports: [ButtonComponent],
  templateUrl: './secondary-button.component.html',
  styleUrl: './secondary-button.component.css',
})
export class SecondaryButtonComponent {}
