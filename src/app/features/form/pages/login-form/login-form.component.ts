import { Component } from '@angular/core';
import { InitialFormContainerComponent } from '../../components/initial-form-container/initial-form-container.component';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [InitialFormContainerComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  constructor(private router: Router, private authService: AuthService) {}

  handleLoginSubmit = (formValue: any) => {
    const { login, password } = formValue;

    this.authService.authenticate(login, password).subscribe({
      next: () => {
        this.authService.setAuthenticated(true);
        this.router.navigateByUrl('/inicio');
      },
      error: (err) => {
        console.log('Erro no login', err);
      },
    });
  };
}
