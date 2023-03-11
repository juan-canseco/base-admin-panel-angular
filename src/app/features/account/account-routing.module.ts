import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'details',
    loadChildren: () => import('./details').then(m => m.DetailsModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit').then(m => m.EditModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
