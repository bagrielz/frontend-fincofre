import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../button/secondary-button/secondary-button.component';
import { PrimaryButtonComponent } from '../button/primary-button/primary-button.component';

@Component({
  selector: 'app-toast',
  imports: [SecondaryButtonComponent, PrimaryButtonComponent],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
})
export class ToastComponent {}
