import {VideoService} from '../services/video.service';
import {Video} from '../model/video.model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Comment } from '../model/comments.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VideoDetailComponent implements OnInit {
  private _video: Video;
  private _safe_video: SafeResourceUrl;
  private _display_reply = false;
  private _display_reply_for_id: number;
  private _replyForm: FormGroup;
  /**
   * 
   * @param _route 
   * @param _videoService 
   * @param _sanitizer used to allow injection of iframe videos, everything is marked as unsafe by default by angular
   * we need to explicitely tell it it's safe by this._sanitizer.bypassSecurity.
   */
  constructor(
    private _route: ActivatedRoute,
    private _videoService: VideoService,
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this._route.paramMap.switchMap((params: ParamMap) => this._videoService.getVideo(+params.get('id')))
        .subscribe(video => this._video = video);


    //clean-up required this wont work when we'll be working asynchrounously
    this._safe_video = this._sanitizer.bypassSecurityTrustResourceUrl(this._video.video);
    this._replyForm = new FormGroup({
      input: new FormControl()
    });
  }

  onSelect(comment: Comment): void {
    console.log("selecting comment: " + comment.id);
  }

  updateLike(): void {
    console.log("liking video: " + this._video.id);
    this._video.likes += 1;
  }

  expandReply(id: number): void {
    this._display_reply = !this._display_reply;
    this._display_reply_for_id = id
    console.log(this._display_reply);
  }
}