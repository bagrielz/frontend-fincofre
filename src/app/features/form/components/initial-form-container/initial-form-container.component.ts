import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { FormConfig } from '../../../../shared/models/form-config.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-initial-form-container',
  imports: [ButtonComponent],
  templateUrl: './initial-form-container.component.html',
  styleUrl: './initial-form-container.component.css',
})
export class InitialFormContainerComponent {
  loginForm!: FormGroup;
  formConfig!: FormConfig;
}
