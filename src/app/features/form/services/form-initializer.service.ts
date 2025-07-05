import { Injectable } from '@angular/core';
import { DynamicFormService } from './dynamic-form.service';
import { FormConfig } from '../../../shared/models/form-config.interface';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormInitializerService {
  constructor(private dynamicFormService: DynamicFormService) {}

  initializeForm(
    formKey: string,
    configFactory: () => FormConfig
  ): {
    form: FormGroup;
    formConfig: FormConfig;
  } {
    this.dynamicFormService.registerFormConfig(formKey, configFactory);

    const formConfig = this.dynamicFormService.getFormConfig(formKey);
    const form = this.dynamicFormService.createFormGroup(formConfig);

    return { form, formConfig };
  }
}
