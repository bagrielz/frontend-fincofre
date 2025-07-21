import { Component } from '@angular/core';
import { InitialFormContainerComponent } from '../../components/initial-form-container/initial-form-container.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  imports: [InitialFormContainerComponent],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
  constructor(private router: Router) {}

  handleRegisterSubmit = () => {
    this.router.navigate(['/inicio']);
  };
}
