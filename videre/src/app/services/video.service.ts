/*Generated with ng generate service video */
import { Injectable } from '@angular/core';
import { Video } from '../model/video.model';
import { VIDEOS } from '../mock-videos';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map'

/*
injectable has to stay as per the style guide; this class might have dependencies later on
this is necessary for dependency injection: https://angular.io/guide/dependency-injection

Also add this to the providers array in app.module.ts!
*/
@Injectable()
export class VideoService {

  constructor() { }

  public getVideos(): Observable<Video[]> {
    return of(VIDEOS);
  }

  public getVideo(id: number): Observable<Video> {
    return this.getVideos()
        .map(videos => videos
        .find(video => video.id == id));
  }

  public updateLikesOf(video: Video): Video {
    video.likes += 1;
    return video;
    /*const url = `${this.heroesUrl}/${hero.id}`;
  return this.http
    .put(url, JSON.stringify(hero), {headers: this.headers})
    .toPromise()
    .then(() => hero)
    .catch(this.handleError); */
  }
}
