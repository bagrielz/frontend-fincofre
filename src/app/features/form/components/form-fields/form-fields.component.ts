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
}
