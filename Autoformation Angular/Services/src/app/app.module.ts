import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersServiceService } from './service/users-service.service';
import { UsersComponent } from './users/users.component';
import { OtherserviceService } from './otherservice.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import {FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonInterceptor } from './common.interceptor';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide:LocationStrategy,useClass:PathLocationStrategy},
    // {provide:HTTP_INTERCEPTORS,useClass:CommonInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
