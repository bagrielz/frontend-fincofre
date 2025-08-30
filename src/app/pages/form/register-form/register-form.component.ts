import { Component } from '@angular/core';
import { AuthFormComponent } from '../../../shared/components/form/auth-form/auth-form.component';
import { FormService } from '../../../core/services/form.service';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-register-form',
  imports: [AuthFormComponent],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
  constructor(
    private formService: FormService,
    private userService: UserService
  ) {}

  handleRegisterSubmit = () => {
    const formRegister = this.formService.getRegister();

    if (formRegister?.valid) {
      const newRegister = formRegister.getRawValue() as User;
      this.userService.register(newRegister).subscribe({
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
