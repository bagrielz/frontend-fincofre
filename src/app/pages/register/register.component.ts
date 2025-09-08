import { Component } from '@angular/core';
import { AuthFormComponent } from '../../shared/components/form/auth-form/auth-form.component';
import { FormService } from '../../core/services/form.service';
import { UserService } from '../../core/services/user.service';
import { User } from '../../shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  imports: [AuthFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
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
