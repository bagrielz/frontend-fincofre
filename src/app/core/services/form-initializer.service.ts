import { Injectable } from '@angular/core';
import { DynamicFormService } from './dynamic-form.service';
import { FormConfig } from '../../shared/models/form-config.model';
import { FormGroup } from '@angular/forms';
import { getLoginForm } from '../config/login-form.config';
import { getRegisterForm } from '../config/register-form.config';
import { getAddSpentFormConfig } from '../config/add-spent-form.config';
import { getUpdateSpentForm } from '../config/update-spent-form.config';
import { getProfileFormConfig } from '../config/profile-form.config';

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

  initializeFormWithData(
    formKey: string,
    data: any
  ): { form: FormGroup; formConfig: FormConfig } {
    const formConfig = this.getFormConfigByKey(formKey);

    this.dynamicFormService.registerFormConfig(formKey, () => formConfig);

    const finalConfig = this.dynamicFormService.getFormConfig(formKey);
    const form = this.dynamicFormService.createFormGroup(finalConfig);

    form.patchValue(data);

    return { form, formConfig: finalConfig };
  }

  private getFormConfigByKey(key: string) {
    if (key === 'loginForm') return getLoginForm();
    if (key === 'registerForm') return getRegisterForm();
    if (key === 'addSpentForm') return getAddSpentFormConfig();
    if (key === 'updateSpentForm') return getUpdateSpentForm();
    if (key === 'profileForm') return getProfileFormConfig();

    throw new Error(`Formulário "${key}" não encontrado`);
  }
}
