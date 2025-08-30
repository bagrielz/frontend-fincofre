import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddSpentFormComponent } from './pages/form/add-spent-form/add-spent-form.component';
import { LoginFormComponent } from './pages/form/login-form/login-form.component';
import { UpdateSpentFormComponent } from './pages/form/update-spent-form/update-spent-form.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { ProfileComponent } from './pages/form/profile/profile.component';
import { RegisterFormComponent } from './pages/form/register-form/register-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'cadastrar', component: RegisterFormComponent },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'inicio', component: DashboardComponent },
      { path: 'adicionar-gasto', component: AddSpentFormComponent },
      { path: 'editar-gasto', component: UpdateSpentFormComponent },
      { path: 'perfil', component: ProfileComponent },
    ],
  },
];
