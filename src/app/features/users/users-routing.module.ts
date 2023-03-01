import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPermissions } from 'app/core/models/auth';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home').then(m => m.HomeModule),
    canActivateChild: [],
    data: {permission: UserPermissions.View}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
