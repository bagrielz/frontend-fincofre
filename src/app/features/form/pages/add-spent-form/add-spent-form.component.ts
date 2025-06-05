import { Component, OnInit } from '@angular/core';
import { TitleComponent } from '../../../dashboard/components/title/title.component';
import { FormConfig } from '../../../../shared/models/form-config.interface';
import { DynamicFormService } from '../../services/dynamic-form.service';
import { getAddSpentFormConfig } from '../../../../core/add-spent-form.config';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormFieldBase } from '../../../../shared/models/form-field-base.interface';

@Component({
  selector: 'app-add-spent-form',
  imports: [TitleComponent, ReactiveFormsModule],
  templateUrl: './add-spent-form.component.html',
  styleUrl: './add-spent-form.component.css',
})
export class AddSpentFormComponent implements OnInit {
  addSpentForm!: FormGroup;
  formConfig!: FormConfig;

  constructor(private dynamicFormService: DynamicFormService) {
    this.dynamicFormService.registerFormConfig(
      'addSpentForm',
      getAddSpentFormConfig
    );
  }

  ngOnInit(): void {
    this.formConfig = this.dynamicFormService.getFormConfig('addSpentForm');
    this.addSpentForm = this.dynamicFormService.createFormGroup(
      this.formConfig
    );
  }

  isFieldType(field: FormFieldBase, type: string): boolean {
    return field.type === type;
  }
}
