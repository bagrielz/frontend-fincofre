import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/pages/dashboard.component';
import { AddSpentFormComponent } from './features/form/pages/add-spent-form/add-spent-form.component';
import { LoginFormComponent } from './features/form/pages/login-form/login-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'inicio', component: DashboardComponent },
  { path: 'adicionar-gasto', component: AddSpentFormComponent },
];
