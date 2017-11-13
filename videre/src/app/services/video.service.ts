/*Generated with ng generate service video */
import { Injectable } from '@angular/core';
import { Video } from '../model/video.model';
import { VIDEOS } from '../mock-videos';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

/*
injectable has to stay as per the style guide; this class might have dependencies later on
this is necessary for dependency injection: https://angular.io/guide/dependency-injection

Also add this to the providers array in app.module.ts!
*/
@Injectable()
export class VideoService {

  constructor() { }

  getVideos(): Observable<Video[]> {
    return of(VIDEOS);
  }

}
