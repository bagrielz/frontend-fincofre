import { Component, input } from '@angular/core';
import { FormFieldBase } from '../../../models/form-field-base.model';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-field',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './field.component.html',
  styleUrl: './field.component.css',
})
export class FieldComponent {
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
