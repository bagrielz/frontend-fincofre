import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../button/primary-button/primary-button.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-toast',
  imports: [PrimaryButtonComponent, ButtonComponent],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
})
export class ToastComponent {}
