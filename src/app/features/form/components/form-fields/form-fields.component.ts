import { Component, input } from '@angular/core';
import { FormFieldBase } from '../../../../shared/models/form-field-base.interface';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormConfig } from '../../../../shared/models/form-config.interface';
import { getUpdateSpentForm } from '../../../../core/update-spent-form.config';
import { getProfileFormConfig } from '../../../../core/profile-form.config';

@Component({
  selector: 'app-form-fields',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-fields.component.html',
  styleUrl: './form-fields.component.css',
})
export class FormFieldsComponent {
  form = input.required<FormGroup>();
  fields = input.required<FormFieldBase[]>();

  hasError(controlName: string, field: FormFieldBase): boolean {
    if (!field.validators) return false;

    const control = this.form().get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  getErrorMessage(controlName: string, field: FormFieldBase): string {
    const control = this.form().get(controlName);
    if (!control || !field.errorMessages) return '';

    for (const errorKey of Object.keys(control.errors || {})) {
      if (field.errorMessages[errorKey]) {
        return field.errorMessages[errorKey];
      }
    }

    return 'Campo inválido';
  }
}
