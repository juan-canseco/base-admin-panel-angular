import { Routes } from '@angular/router';

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
}
];
