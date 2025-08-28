import { Component } from '@angular/core';
import { InitialFormContainerComponent } from '../../components/initial-form-container/initial-form-container.component';
import { FormService } from '../../../../services/form.service';
import { User } from '../../../../shared/interfaces/user.interface';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  imports: [InitialFormContainerComponent],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
  constructor(
    private formService: FormService,
    private userService: UserService,
    private router: Router
  ) {}

  handleRegisterSubmit = () => {
    const formRegister = this.formService.getRegister();

    if (formRegister?.valid) {
      const newRegister = formRegister.getRawValue() as User;
      this.userService.register(newRegister).subscribe({
        next: () => {
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Erro ao realizar cadastro', err);
        },
      });
    }
  };
}
