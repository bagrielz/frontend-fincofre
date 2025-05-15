import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-primary-button',
  imports: [ButtonComponent],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.css',
})
export class PrimaryButtonComponent {}
