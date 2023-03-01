import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from 'app/core/guards/permission.guard';
import { UserPermissions } from 'app/core/models/auth';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home').then(m => m.HomeModule),
    canActivateChild: [PermissionGuard],
    data: {permission: UserPermissions.View}
  },
  {
    path: 'details/:userId',
    loadChildren: () => import('./details').then(m => m.DetailsModule),
    canActivateChild: [PermissionGuard],
    data: {permission: UserPermissions.View}
  },
  {
    path: 'create',
    loadChildren: () => import('./create').then(m => m.CreateModule),
    canActivateChild: [PermissionGuard],
    data: {permission : UserPermissions.Create}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
