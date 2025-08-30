import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormConfig } from '../../../models/form-config.model';
import { FormInitializerService } from '../../../../core/services/form-initializer.service';
import { TitleComponent } from '../../title/title.component';
import { ButtonComponent } from '../../button/button.component';
import { User } from '../../../models/user.model';
import { TokenService } from '../../../../core/services/token.service';
import { UserService } from '../../../../core/services/user.service';
import { SubtitleComponent } from '../../subtitle/subtitle.component';
import { FieldComponent } from '../field/field.component';

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
  user!: User;
  token!: string | null;

  inputFormGroup = input.required<string>();
  formWithData = input<boolean>();
  onSubmit = input.required<(formValue: any) => void>();

  constructor(
    private formInitializer: FormInitializerService,
    private tokenService: TokenService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const formKey = this.inputFormGroup();
    const formWithData = this.formWithData();

    if (formWithData) {
      this.token = this.tokenService.returnToken();
      this.userService.get(this.token).subscribe((user) => {
        this.user = user;

        const { form, formConfig } =
          this.formInitializer.initializeFormWithData(formKey, user);
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
