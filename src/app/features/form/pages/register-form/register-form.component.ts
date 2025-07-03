import { Component } from '@angular/core';
import { InitialFormContainerComponent } from '../../components/initial-form-container/initial-form-container.component';

@Component({
  selector: 'app-register-form',
  imports: [InitialFormContainerComponent],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {}
