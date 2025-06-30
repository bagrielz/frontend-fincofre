import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { FormConfig } from '../../../../shared/models/form-config.interface';
import { FormGroup } from '@angular/forms';
import { DynamicFormService } from '../../services/dynamic-form.service';
import { getLoginForm } from '../../../../core/login-form.config';

@Component({
  selector: 'app-initial-form-container',
  imports: [ButtonComponent],
  templateUrl: './initial-form-container.component.html',
  styleUrl: './initial-form-container.component.css',
})
export class InitialFormContainerComponent {
  loginForm!: FormGroup;
  formConfig!: FormConfig;

  constructor(private dynamicFormService: DynamicFormService) {
    this.dynamicFormService.registerFormConfig('loginForm', getLoginForm);
  }

  ngOnInit(): void {
    this.formConfig = this.dynamicFormService.getFormConfig('loginForm');
    this.loginForm = this.dynamicFormService.createFormGroup(this.formConfig);
  }
}
