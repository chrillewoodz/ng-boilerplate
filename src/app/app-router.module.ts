// Angular
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Custom
import {AuthGuard} from '@guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    loadChildren: './routes/+dashboard/dashboard.module#DashboardModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: './routes/+signin/signin.module#SigninModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ]
})

export class AppRouterModule {}
