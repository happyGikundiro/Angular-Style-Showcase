import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./child-two/child-two.component').then((m) => m.ChildTwoComponent),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./child-one/child-one.component').then((m) => m.ChildOneComponent),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
