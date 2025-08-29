import { Injectable } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup } from '@angular/forms';
import { FormConfig } from '../../../shared/interfaces/form-config.interface';

@Injectable({
  providedIn: 'root',
})
export class DynamicFormService {
  private formConfigs: { [key: string]: Function } = {};

  constructor(private fb: FormBuilder) {}

  registerFormConfig(formName: string, config: Function): void {
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

  createFormWithData(formKey: string, data: any) {
    const config = this.getFormConfig(formKey);
    const formGroup = this.createFormGroup(config);

    formGroup.patchValue(data);

    return formGroup;
  }
}
