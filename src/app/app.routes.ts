import { Routes } from '@angular/router';
import { SpentFormComponent } from './pages/spent-form/spent-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'adicionar-gasto', component: SpentFormComponent },
];
