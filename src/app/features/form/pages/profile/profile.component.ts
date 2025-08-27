import { Component } from '@angular/core';
import { FormContainerComponent } from '../../components/form-container/form-container.component';
import { UserService } from '../../../../services/user.service';
import { TokenService } from '../../../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [FormContainerComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  constructor(
    private tokenService: TokenService,
    private userService: UserService,
    private router: Router
  ) {}

  updateUserData = (formValue: any) => {
    const token = this.tokenService.returnToken();

    this.userService.update(token, formValue).subscribe({
      next: () => {
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigate(['/perfil']);
          });
      },
      error: (err) => {
        console.log(err);
      },
    });
  };
}
