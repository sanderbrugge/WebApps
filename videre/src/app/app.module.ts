import {UserModule} from './user/user.module';
import {RegisterComponent} from './user/register/register.component';
import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { VideoService } from './services/video.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { AuthGuardService } from './user/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    VideoCardComponent,
    VideoDetailComponent,
    UploadFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    UserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'video/:id', component: VideoDetailComponent},
      {path: 'login', component: LoginComponent},
      {path: 'upload', component: UploadFormComponent, canActivate: [AuthGuardService]},
      {path: '', component: HomeComponent},
      {path: '**', component: HomeComponent}
    ])
  ],
  providers: [
    VideoService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
