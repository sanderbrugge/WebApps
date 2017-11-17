import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { VideoService } from './services/video.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    VideoCardComponent,
    VideoDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'video/:id', component: VideoDetailComponent},
      {path: 'login', component: LoginComponent},
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
