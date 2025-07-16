import { Component } from '@angular/core';
import { InitialFormContainerComponent } from '../../components/initial-form-container/initial-form-container.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [InitialFormContainerComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  constructor(private router: Router) {}

  whenSending() {
    this.router.navigate(['/inicio']);
  }
}
