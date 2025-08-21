import { Component, OnInit } from '@angular/core';
import { FormContainerComponent } from '../../components/form-container/form-container.component';
import { AuthService } from '../../../../services/auth.service';
import { User } from '../../../../shared/models/user.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  imports: [FormContainerComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  user!: Observable<User | null>;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }
}
