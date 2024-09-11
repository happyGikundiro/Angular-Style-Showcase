import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ChildTwoComponent } from './components/main-content/child-two/child-two.component';

const routes: Routes = [
  {path:"home", component:ChildTwoComponent},
  {path:"products", component:MainContentComponent},
  // {path:"products",loadComponent: () => import('./components/main-content/child-two/child-two.component').then((m)=>m.ChildTwoComponent)},
  {path:"**", component:ChildTwoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
