import { Injectable } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup } from '@angular/forms';
import { FormConfig } from '../../../shared/models/form-config.interface';

@Injectable({
  providedIn: 'root',
})
export class DynamicFormService {
  private formConfigs: { [key: string]: Function } = {};

  constructor(private fb: FormBuilder) {}

  registerFormConfig(formName: string, config: Function) {
    this.formConfigs[formName] = config;
  }

  getFormConfig(formKey: string, ...args: any[]): FormConfig {
    if (!this.formConfigs[formKey]) {
      throw new Error(`Configuração de formulário não encontrada: ${formKey}`);
    }

    return this.formConfigs[formKey](...args);
  }

  createFormGroup(
    config: FormConfig,
    formOptions?: AbstractControlOptions
  ): FormGroup {
    const formControls: { [key: string]: any } = {};

    config.fields.forEach((field) => {
      formControls[field.formControlName] = ['', field.validators];
    });

    return this.fb.group(formControls, formOptions);
  }
}
