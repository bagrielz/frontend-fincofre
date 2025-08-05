import { Component, input } from '@angular/core';
import { FormFieldBase } from '../../../../shared/models/form-field-base.interface';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-fields',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-fields.component.html',
  styleUrl: './form-fields.component.css',
})
export class FormFieldsComponent {
  form = input.required<FormGroup>();
  fields = input.required<FormFieldBase[]>();

  hasError(controlName: string): boolean {
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
