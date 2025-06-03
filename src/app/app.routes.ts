import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/pages/dashboard.component';
import { AddSpentFormComponent } from './features/add-spent-form/pages/add-spent-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: DashboardComponent },
  { path: 'adicionar-gasto', component: AddSpentFormComponent },
];
