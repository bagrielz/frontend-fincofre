import { Component, OnInit } from '@angular/core';
import { TitleComponent } from '../../../../components/title/title.component';
import { FormConfig } from '../../../../shared/models/form-config.interface';
import { DynamicFormService } from '../../services/dynamic-form.service';
import { getAddSpentFormConfig } from '../../../../core/add-spent-form.config';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FieldComponent } from '../../components/field/field.component';
import { FormContainerComponent } from '../../components/form-container/form-container.component';
import { SubtitleComponent } from '../../components/subtitle/subtitle.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-add-spent-form',
  imports: [
    FieldComponent,
    TitleComponent,
    ReactiveFormsModule,
    CommonModule,
    FormContainerComponent,
    SubtitleComponent,
    ButtonComponent,
  ],
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
}
