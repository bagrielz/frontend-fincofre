import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddSpentComponent } from './pages/add-spent/add-spent.component';
import { UpdateSpentComponent } from './pages/update-spent/update-spent.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastrar', component: RegisterComponent },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'inicio', component: DashboardComponent },
      { path: 'adicionar-gasto', component: AddSpentComponent },
      { path: 'editar-gasto/:id', component: UpdateSpentComponent },
      { path: 'perfil', component: ProfileComponent },
    ],
  },
];
