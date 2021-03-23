import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { LoginComponent } from '../login/login.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

const authRoutes: Routes = [
  { path: 'auth', component: AuthComponent},
  { path: 'login', component: LoginComponent},
  { path: 'forgotPassword', component: ForgotPasswordComponent},
  { path: 'signUp', component: SignUpComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(authRoutes)
  ], 
  exports: [RouterModule]
})
export class AuthRoutingModule { }
