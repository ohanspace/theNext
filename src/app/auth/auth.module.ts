import { AdminAuthGuard } from './admin-auth-guard.service';
import { UserService } from './user/user.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CustomMaterialModule } from './../custom-material/custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  declarations: [LoginComponent],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuard, 
    UserService
  ]
})
export class AuthModule { }
