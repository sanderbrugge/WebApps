import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forChild(
      [
        { path: 'register', component: RegisterComponent }
      ]
    )
  ],
  declarations: [
    RegisterComponent
  ],
  providers: [
    AuthenticationService,
    AuthGuardService
  ]
})
export class UserModule { }
