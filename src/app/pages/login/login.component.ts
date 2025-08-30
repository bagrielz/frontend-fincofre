import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFormComponent } from '../../shared/components/form/auth-form/auth-form.component';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [AuthFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) {}

  handleLoginSubmit = (formValue: any) => {
    const { login, password } = formValue;

    this.authService.authenticate(login, password).subscribe({
      next: (res) => {
        const token = res.body?.token;

        if (token) {
          this.authService.saveToken(token);
          this.router.navigateByUrl('/inicio');
        } else {
          console.error('Token não encontrado na resposta');
        }
      },
      error: (err) => {
        console.log('Erro no login', err);
      },
    });
  };
}
