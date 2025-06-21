import { Component, input } from '@angular/core';
import { FormFieldBase } from '../../../../shared/models/form-field-base.interface';
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
}
