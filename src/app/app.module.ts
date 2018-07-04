import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { AppComponent } from './app.component';
import {  routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//servicios

import { UserGuard } from './services/user.guard';
import { UserService } from './services/user.services';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    routing,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
