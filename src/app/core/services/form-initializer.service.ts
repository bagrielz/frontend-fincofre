import { Injectable } from '@angular/core';
import { DynamicFormService } from './dynamic-form.service';
import { FormConfig } from '../../shared/models/form-config.model';
import { FormGroup } from '@angular/forms';
import { getLoginFormConfig } from '../config/login.config';
import { getRegisterFormConfig } from '../config/register.config';
import { getAddSpentFormConfig } from '../config/add-spent.config';
import { getUpdateSpentFormConfig } from '../config/update-spent.config';
import { getProfileFormConfig } from '../config/profile.config';
import { formatDateToInput } from '../../shared/utils/date-utils';

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
    const normalizeData = {
      ...data,
      date: data.date ? formatDateToInput(data.date) : '',
    };
    const formConfig = this.getFormConfigByKey(formKey);

    this.dynamicFormService.registerFormConfig(formKey, () => formConfig);

    const finalConfig = this.dynamicFormService.getFormConfig(formKey);
    const form = this.dynamicFormService.createFormGroup(finalConfig);

    form.patchValue(normalizeData);

    return { form, formConfig: finalConfig };
  }

  private getFormConfigByKey(key: string) {
    if (key === 'loginForm') return getLoginFormConfig();
    if (key === 'registerForm') return getRegisterFormConfig();
    if (key === 'addSpentForm') return getAddSpentFormConfig();
    if (key === 'updateSpentForm') return getUpdateSpentFormConfig();
    if (key === 'profileForm') return getProfileFormConfig();

    throw new Error(`Formulário "${key}" não encontrado`);
  }
}
