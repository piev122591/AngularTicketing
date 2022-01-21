import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginUserComponent } from './login-user/login-user.component';

@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent, LoginUserComponent],
  imports: [CommonModule, LoginRoutingModule],
})
export class LoginModule {}
