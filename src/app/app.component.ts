import { Component } from '@angular/core';
import { HeaderComponent } from './features/header/pages/header.component';
import { DashboardComponent } from './features/dashboard/pages/dashboard.component';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AddSpentFormComponent } from './features/add-spent-form/pages/add-spent-form.component';

const MODULES = [RouterOutlet, ReactiveFormsModule];

const COMPONENTS = [HeaderComponent, DashboardComponent, AddSpentFormComponent];

@Component({
  selector: 'app-root',
  imports: [...MODULES, ...COMPONENTS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend-fincofre';
}
