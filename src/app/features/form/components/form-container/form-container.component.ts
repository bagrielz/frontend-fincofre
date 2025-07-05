import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormConfig } from '../../../../shared/models/form-config.interface';
import { FormInitializerService } from '../../services/form-initializer.service';
import { TitleComponent } from '../../../../shared/components/title/title.component';
import { SubtitleComponent } from '../subtitle/subtitle.component';
import { FormFieldsComponent } from '../form-fields/form-fields.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-form-container',
  imports: [
    TitleComponent,
    SubtitleComponent,
    FormFieldsComponent,
    ButtonComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './form-container.component.html',
  styleUrl: './form-container.component.css',
})
export class FormContainerComponent {
  form!: FormGroup;
  formConfig!: FormConfig;

  inputFormGroup = input.required<string>();

  constructor(private formInitializer: FormInitializerService) {}

  ngOnInit(): void {
    const formKey = this.inputFormGroup();
    const { form, formConfig } = this.formInitializer.initializeForm(formKey);

    this.form = form;
    this.formConfig = formConfig;
  }
}
