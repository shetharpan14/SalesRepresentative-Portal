import { Routes } from '@angular/router';
import { SalesRepresentativeDetailsComponent } from './sales-representative-details/sales-representative-details.component';
import { DashboardComponent } from './sales-representative-details/dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sales-representative-details', component: SalesRepresentativeDetailsComponent }

];
