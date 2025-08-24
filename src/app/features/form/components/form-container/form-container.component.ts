import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormConfig } from '../../../../shared/models/form-config.interface';
import { FormInitializerService } from '../../services/form-initializer.service';
import { TitleComponent } from '../../../../shared/components/title/title.component';
import { SubtitleComponent } from '../subtitle/subtitle.component';
import { FormFieldsComponent } from '../form-fields/form-fields.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { User } from '../../../../shared/models/user.interface';
import { TokenService } from '../../../../services/token.service';
import { UserService } from '../../../../services/user.service';

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
  user!: User;
  token!: string | null;

  inputFormGroup = input.required<string>();
  formWithData = input<boolean>();

  constructor(
    private formInitializer: FormInitializerService,
    private tokenService: TokenService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const formKey = this.inputFormGroup();
    const formWithData = this.formWithData();
    console.log(formWithData);

    if (formWithData) {
      this.token = this.tokenService.returnToken();
      this.userService.get(this.token).subscribe((user) => {
        console.log(user);
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
}
