import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormConfig } from '../../../models/form-config.model';
import { FormInitializerService } from '../../../../core/services/form-initializer.service';
import { TitleComponent } from '../../title/title.component';
import { ButtonComponent } from '../../button/button.component';
import { SubtitleComponent } from '../../subtitle/subtitle.component';
import { FieldComponent } from '../field/field.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-entity-form',
  imports: [
    TitleComponent,
    SubtitleComponent,
    FieldComponent,
    ButtonComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './entity-form.component.html',
  styleUrl: './entity-form.component.css',
})
export class EntityFormComponent {
  form!: FormGroup;
  formConfig!: FormConfig;

  inputFormGroup = input.required<string>();
  formWithData = input<boolean>();
  onSubmit = input.required<(formValue: any) => void>();
  dataProvider = input<() => Observable<any>>();

  constructor(private formInitializer: FormInitializerService) {}

  ngOnInit(): void {
    const formKey = this.inputFormGroup();
    const formWithData = this.formWithData();

    if (formWithData && this.dataProvider()) {
      this.dataProvider()!().subscribe((entity) => {
        const { form, formConfig } =
          this.formInitializer.initializeFormWithData(formKey, entity);
        this.form = form;
        this.formConfig = formConfig;
      });
    } else {
      const { form, formConfig } = this.formInitializer.initializeForm(formKey);
      this.form = form;
      this.formConfig = formConfig;
    }
  }

  submitForm() {
    this.onSubmit()(this.form.value);
  }
}
