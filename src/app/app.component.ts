import { Component } from '@angular/core';
import { HeaderComponent } from './features/header/pages/header.component';
import { Router, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const MODULES = [RouterOutlet, ReactiveFormsModule];

const COMPONENTS = [HeaderComponent];

@Component({
  selector: 'app-root',
  imports: [...MODULES, ...COMPONENTS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend-fincofre';

  constructor(private router: Router) {}

  shouldShowHeader(): boolean {
    const hiddenRoutes = ['/login', '/cadastrar'];
    return !hiddenRoutes.includes(this.router.url);
  }
}
