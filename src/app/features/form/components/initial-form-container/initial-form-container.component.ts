import { Component, ErrorHandler, input } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { FormConfig } from '../../../../shared/models/form-config.interface';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { getLoginForm } from '../../../../core/login-form.config';
import { getRegisterForm } from '../../../../core/register-form.config';
import { FormFieldsComponent } from '../form-fields/form-fields.component';
import { FormInitializerService } from '../../services/form-initializer.service';

@Component({
  selector: 'app-initial-form-container',
  imports: [ButtonComponent, ReactiveFormsModule, FormFieldsComponent],
  templateUrl: './initial-form-container.component.html',
  styleUrl: './initial-form-container.component.css',
})
export class InitialFormContainerComponent {
  form!: FormGroup;
  formConfig!: FormConfig;

  inputFormGroup = input.required<string>();

  constructor(private formInitializer: FormInitializerService) {}

  ngOnInit(): void {
    const formKey: string = this.inputFormGroup();
    const result = this.formInitializer.initializeForm(
      formKey,
      this.takesDataFromTheForm
    );

    this.form = result.form;
    this.formConfig = result.formConfig;
  }

  private takesDataFromTheForm = (): FormConfig => {
    const key = this.inputFormGroup();

    if (key === 'loginForm') return getLoginForm();
    if (key === 'registerForm') return getRegisterForm();

    throw new Error(`Formulário "${key}" não encontrado`);
  };
}
