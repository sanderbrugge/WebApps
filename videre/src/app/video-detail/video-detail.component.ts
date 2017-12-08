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
    this._route
      .paramMap
      .switchMap((params: ParamMap) => this._videoService.getVideo(params.get('id')))
      .subscribe(video => this.initVideo(video));

    this._replyForm = new FormGroup({
      comment: new FormControl()
    });


  }

  /**
   * 
   * @param video use this function when the video got retrieved to init the youtube url and update the view count
   */
  initVideo(video: Video) {
    this._video = video;
    this._safe_video = this._sanitizer.bypassSecurityTrustResourceUrl(this._video.video);
    this._videoService.updateViews(this._video).subscribe(status => console.log(status));    
    this._video.views += 1;
  }

  onSelect(comment: Comment): void {
    console.log("selecting comment: " + comment.id);
  }

  updateLike(): void {
    console.log("liking video: " + this._video.id);
    this._video.likes += 1;
    this._videoService.updateLikesOf(this._video).subscribe(status => console.log(status));
  }

  expandReply(id: number): void {
    this._display_reply = !this._display_reply;
    this._display_reply_for_id = id
  }

  /**
   * add a comment to a video
   */
  addComment(): void {
    if(this._replyForm.valid) {
      this._videoService.addCommentTo(this._video, new Comment(1,"Sander Brugge", this._replyForm.value.comment, new Date(), null))
        .subscribe(comment => console.log(comment));
      this._replyForm.reset();
    }
  }

  addSubcomment(comment: Comment) {
    // i used to retrieve the comment by id. This however would result in low performance when there are many comments.
    //let commentById = this._video.comments.filter(comment => comment.id == id);
    console.log(comment)
    comment.subcomments.push(new Comment(2,"Sander Brugge",this._replyForm.value.comment, new Date(), null));
  }
}