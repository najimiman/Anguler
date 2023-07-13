import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloudingRoutingModule } from './lazylouding-routing.module';
import { LazyloudingComponent } from './lazylouding.component';


@NgModule({
  declarations: [
    LazyloudingComponent
  ],
  imports: [
    CommonModule,
    LazyloudingRoutingModule
  ]
})
export class LazyloudingModule { }
