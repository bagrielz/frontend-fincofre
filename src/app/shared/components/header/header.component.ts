import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../models/user.model';
import { TokenService } from '../../../core/services/token.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  user!: User | null;

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    const token = this.tokenService.returnToken();
    this.userService.get(token).subscribe({
      next: (user) => (this.user = user),
    });
  }

  backToHome() {
    this.router.navigateByUrl('/inicio');
  }

  userLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
