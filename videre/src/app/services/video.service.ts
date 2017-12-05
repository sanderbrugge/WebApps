/*Generated with ng generate service video */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Video } from '../model/video.model';
import { VIDEOS } from '../mock-videos';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map'

import { Comment } from '../model/comments.model';

/*
injectable has to stay as per the style guide; this class might have dependencies later on
this is necessary for dependency injection: https://angular.io/guide/dependency-injection

Also add this to the providers array in app.module.ts!
*/
@Injectable()
export class VideoService {
  private _baseUrl = 'http://localhost:4200/';
  
  constructor(private http: Http) {
  }

  public getVideos(): Observable<Video[]> {
    let videoURL = this._baseUrl + "API/videos";
    return this.http.get(videoURL).map(response =>
      response.json().map(json =>
        new Video(
          json._id,
          json.views,
          json.title,
          json.likes,
          json.description,
          json.thumbnail,
          json.video,
          json.tags,
          json.comments
        )
      )
    );
  }

  public getVideo(id: string): Observable<Video> {
    let videoById = this._baseUrl + "API/video/";
    return this.http.get(`${videoById}/${id}`)
      .map(response => response.json()).map(json => new Video(
        json._id,
        json.views,
        json.title,
        json.likes,
        json.description,
        json.thumbnail,
        json.video,
        json.tags,
        json.comments
      )
    );
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

  public addCommentTo(video: Video, comment: Comment) {
    video.comments.push(comment);
  }

  public uploadVideo(video: Video): Observable<Video> {
    console.log("video: " + video.id + video.title + video.video);
    return this.http.post(this._baseUrl + "API/video/", video)
    .map(res => res.json()).map(json =>
      new Video(
        json._id,
        json.views,
        json.title,
        json.likes,
        json.description,
        json.thumbnail,
        json.video,
        json.tags,
        json.comment
      )
    );
  }
}
