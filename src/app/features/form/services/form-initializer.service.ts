import { Injectable } from '@angular/core';
import { DynamicFormService } from './dynamic-form.service';
import { FormConfig } from '../../../shared/models/form-config.interface';
import { FormGroup } from '@angular/forms';
import { getLoginForm } from '../../../core/login-form.config';
import { getRegisterForm } from '../../../core/register-form.config';
import { getAddSpentFormConfig } from '../../../core/add-spent-form.config';
import { getUpdateSpentForm } from '../../../core/update-spent-form.config';

@Injectable({
  providedIn: 'root',
})
export class FormInitializerService {
  constructor(private dynamicFormService: DynamicFormService) {}

  initializeForm(formKey: string): {
    form: FormGroup;
    formConfig: FormConfig;
  } {
    const formConfig = this.getFormConfigByKey(formKey);

    this.dynamicFormService.registerFormConfig(formKey, () => formConfig);

    const finalConfig = this.dynamicFormService.getFormConfig(formKey);
    const form = this.dynamicFormService.createFormGroup(finalConfig);

    return { form, formConfig: finalConfig };
  }

  private getFormConfigByKey(key: string) {
    if (key === 'loginForm') return getLoginForm();
    if (key === 'registerForm') return getRegisterForm();
    if (key === 'addSpentForm') return getAddSpentFormConfig();
    if (key === 'updateSpentForm') return getUpdateSpentForm();

    throw new Error(`Formulário "${key}" não encontrado`);
  }
}
