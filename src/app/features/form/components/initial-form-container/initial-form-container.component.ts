import { Component, input } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { FormConfig } from '../../../../shared/models/form-config.interface';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormService } from '../../services/dynamic-form.service';
import { getLoginForm } from '../../../../core/login-form.config';
import { FieldComponent } from '../field/field.component';

@Component({
  selector: 'app-initial-form-container',
  imports: [ButtonComponent, FieldComponent, ReactiveFormsModule],
  templateUrl: './initial-form-container.component.html',
  styleUrl: './initial-form-container.component.css',
})
export class InitialFormContainerComponent {
  form!: FormGroup;
  formConfig!: FormConfig;

  inputFormGroup = input.required<string>();

  constructor(private dynamicFormService: DynamicFormService) {}

  ngOnInit(): void {
    const formKey: string = this.inputFormGroup();

    this.dynamicFormService.registerFormConfig(formKey, getLoginForm);
    this.formConfig = this.dynamicFormService.getFormConfig(formKey);
    this.form = this.dynamicFormService.createFormGroup(this.formConfig);
  }
}
