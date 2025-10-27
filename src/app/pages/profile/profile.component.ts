import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../core/services/token.service';
import { UserService } from '../../core/services/user.service';
import { EntityFormComponent } from '../../shared/components/form/entity-form/entity-form.component';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-profile',
  imports: [EntityFormComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  user$!: Observable<User>;

  constructor(
    private tokenService: TokenService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const token = this.tokenService.returnToken();

    if (token) {
      this.user$ = this.userService.get(token);
    }
  }

  getUserData = () => this.user$;

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
