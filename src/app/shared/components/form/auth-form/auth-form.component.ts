import { Component, input } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { FormConfig } from '../../../models/form-config.model';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormInitializerService } from '../../../../core/services/form-initializer.service';
import { FieldComponent } from '../field/field.component';
import { FormService } from '../../../../core/services/form.service';

@Component({
  selector: 'app-auth-form',
  imports: [ButtonComponent, ReactiveFormsModule, FieldComponent],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css',
})
export class AuthFormComponent {
  form!: FormGroup;
  formConfig!: FormConfig;

  onSubmit = input.required<(formValue: any) => void>();
  inputFormGroup = input.required<string>();

  constructor(
    private formInitializer: FormInitializerService,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    const formKey = this.inputFormGroup();
    const { form, formConfig } = this.formInitializer.initializeForm(formKey);

    this.form = form;
    this.formConfig = formConfig;

    this.formService.setRegister(this.form);
  }

  submitForm() {
    this.onSubmit()(this.form.value);
  }
}
