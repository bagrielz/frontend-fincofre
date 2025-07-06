import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/pages/dashboard.component';
import { AddSpentFormComponent } from './features/form/pages/add-spent-form/add-spent-form.component';
import { LoginFormComponent } from './features/form/pages/login-form/login-form.component';
import { RegisterFormComponent } from './features/form/pages/register-form/register-form.component';
import { UpdateSpentFormComponent } from './features/form/pages/update-spent-form/update-spent-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'cadastrar', component: RegisterFormComponent },
  { path: 'inicio', component: DashboardComponent },
  { path: 'adicionar-gasto', component: AddSpentFormComponent },
  { path: 'editar-gasto', component: UpdateSpentFormComponent },
];
