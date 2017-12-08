import {AuthenticationService} from '../user/authentication.service';
/*Generated with ng generate service video */
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
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
  
  constructor(
    private http: Http,
     private auth: AuthenticationService
    ) {}

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
/**
 * 
 * @param video the video that needs updating
 * increment the likes off a vid by 1 on click
 */
public updateLikesOf(video: Video): Observable<number> {
    return this.http.put(`${this._baseUrl}API/video/${video.id}/likes`, video, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
      .map(res => res.status);
}

/**
 * 
 * @param video the video that needs updating
 * increment the views off a vid by 1 on click
 */
public updateViews(video: Video): Observable<number> {
  return this.http.put(`${this._baseUrl}API/video/${video.id}/views`, video)
    .map(res => res.status);
}

  public addCommentTo(video: Video, comment: Comment): Observable<Comment> {
    let newComment =  this.http.post(`${this._baseUrl}API/video/${video.id}/comment`, comment, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) }).map(res => res.json()).map(json =>
      new Comment(
        json._id,
        json.user,
        json.comment,
        json.subcomments,
        json.date
      )
    );
    video.comments.push(comment);
    return newComment;
  }

  /**
   * 
   * @param video video to upload
   * post the video to the backend
   */
  public uploadVideo(video: Video): Observable<Video> {
    console.log("video: " + video.id + video.title + video.video);
    return this.http.post(`${this._baseUrl}API/video/`, video, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
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
