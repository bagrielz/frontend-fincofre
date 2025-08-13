import { Component } from '@angular/core';
import { InitialFormContainerComponent } from '../../components/initial-form-container/initial-form-container.component';
import { FormService } from '../../../../services/form.service';

@Component({
  selector: 'app-register-form',
  imports: [InitialFormContainerComponent],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
  constructor(private formService: FormService) {}

  handleRegisterSubmit = () => {
    const formRegister = this.formService.getRegister();
    console.log('Cadastro realizado com sucesso!', formRegister?.value);
  };
}
