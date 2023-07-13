import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyloudingComponent } from './lazylouding.component';
import { Component4Component } from '../component4/component4.component';

const routes: Routes = [
  { path: '', component: LazyloudingComponent },
  { path: 'c4', component: Component4Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloudingRoutingModule { }
