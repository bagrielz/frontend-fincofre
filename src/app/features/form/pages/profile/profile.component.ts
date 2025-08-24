import { Component, OnInit } from '@angular/core';
import { FormContainerComponent } from '../../components/form-container/form-container.component';
import { UserService } from '../../../../services/user.service';
import { TokenService } from '../../../../services/token.service';
import { User } from '../../../../shared/models/user.interface';
import { DynamicFormService } from '../../services/dynamic-form.service';
import { FormConfig } from '../../../../shared/models/form-config.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [FormContainerComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  user!: User;
  token!: string | null;
  name!: string;

  formConfig!: FormConfig;
  formGroup!: FormGroup;

  constructor(
    private tokenService: TokenService,
    private userService: UserService,
    private dynamicFormService: DynamicFormService
  ) {}

  ngOnInit(): void {
    // this.token = this.tokenService.returnToken();
    // this.userService.get(this.token).subscribe((user) => {
    //   console.log(user);
    //   this.user = user;
    //   this.formGroup = this.dynamicFormService.createFormWithData(
    //     'profileForm',
    //     user
    //   );
    // });
  }
}
