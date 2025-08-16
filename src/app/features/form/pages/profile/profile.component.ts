import { Component } from '@angular/core';
import { FormContainerComponent } from '../../components/form-container/form-container.component';

@Component({
  selector: 'app-profile',
  imports: [FormContainerComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {}
