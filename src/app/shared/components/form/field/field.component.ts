import { Component, input } from '@angular/core';
<<<<<<< HEAD:src/app/features/form/components/form-fields/form-fields.component.ts
import { FormFieldBase } from '../../../../shared/interfaces/form-field-base.interface';
=======
import { FormFieldBase } from '../../../models/form-field-base.model';
>>>>>>> main:src/app/shared/components/form/field/field.component.ts
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-fields',
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
