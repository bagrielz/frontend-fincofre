import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private router: Router, private authService: AuthService) {}

  backToHome() {
    this.router.navigateByUrl('/inicio');
  }

  userLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
