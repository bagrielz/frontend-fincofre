import { Component, ErrorHandler, input } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { FormConfig } from '../../../../shared/models/form-config.interface';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormFieldsComponent } from '../form-fields/form-fields.component';
import { FormInitializerService } from '../../services/form-initializer.service';

@Component({
  selector: 'app-initial-form-container',
  imports: [ButtonComponent, ReactiveFormsModule, FormFieldsComponent],
  templateUrl: './initial-form-container.component.html',
  styleUrl: './initial-form-container.component.css',
})
export class InitialFormContainerComponent {
  form!: FormGroup;
  formConfig!: FormConfig;

  onSubmit = input.required<(formValue: any) => void>();
  inputFormGroup = input.required<string>();

  constructor(private formInitializer: FormInitializerService) {}

  ngOnInit(): void {
    const formKey = this.inputFormGroup();
    const { form, formConfig } = this.formInitializer.initializeForm(formKey);

    this.form = form;
    this.formConfig = formConfig;
  }

  submitForm() {
    this.onSubmit()(this.form.value);
  }
}
