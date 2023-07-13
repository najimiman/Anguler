import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { authGuard } from './auth.guard';
import { superAdminGuard } from './super-admin.guard';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';

const routes: Routes = [
  { path: 'home',component:Component1Component },
  { path: 'c2',component:Component2Component ,canActivate:[authGuard]},
  { path: 'c1/:params/cc/:aa',component:Component1Component },
  { path: '',redirectTo:'home',pathMatch:'full'},
  { path: 'search',component:Component3Component },
  { path: 'lazylouding', loadChildren: () => import('./lazylouding/lazylouding.module').then(m => m.LazyloudingModule) },
  {path:'admin',canActivateChild:[superAdminGuard],
  children:[
    {path:'adminedit',component:AdminEditComponent},
    {path:'admindelete',component:AdminDeleteComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
