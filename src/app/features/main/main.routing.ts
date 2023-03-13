import { Routes } from '@angular/router';
import { AuthGuard } from 'app/core/guards/auth';

export const AdminLayoutRoutes: Routes = [
{
    path: 'dashboard',
    loadChildren: () => import('../dashboard').then(m => m.DashboardModule)
},
{
    path: 'users',
    loadChildren: () => import('../users').then(m => m.UsersModule)
},
{
    path: 'roles',
    loadChildren: () => import('../roles').then(m => m.RolesModule)
},
{
    path: 'products',
    loadChildren: () => import('../products').then(m => m.ProductsModule)
},
{
    path: 'account',
    loadChildren: () => import('../account').then(m => m.AccountModule),
    canActivateChild: [AuthGuard]
  }
];
