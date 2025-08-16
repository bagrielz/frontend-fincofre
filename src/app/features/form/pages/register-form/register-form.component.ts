import { Component } from '@angular/core';
import { InitialFormContainerComponent } from '../../components/initial-form-container/initial-form-container.component';
import { FormService } from '../../../../services/form.service';
import { RegisterService } from '../../../../services/register.service';
import { User } from '../../../../shared/models/user.interface';

@Component({
  selector: 'app-register-form',
  imports: [InitialFormContainerComponent],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
  constructor(
    private formService: FormService,
    private registerService: RegisterService
  ) {}

  handleRegisterSubmit = () => {
    const formRegister = this.formService.getRegister();

    if (formRegister?.valid) {
      const newRegister = formRegister.getRawValue() as User;
      this.registerService.register(newRegister).subscribe({
        next: (res) => {
          console.log('Cadastro realizado com sucesso!', res);
        },
        error: (err) => {
          console.log('Erro ao realizar cadastro', err);
        },
      });
    }
  };
}
