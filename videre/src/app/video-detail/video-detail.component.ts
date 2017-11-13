import {VideoService} from '../services/video.service';
import {Video} from '../model/video.model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VideoDetailComponent implements OnInit {
  private _video: Video;

  constructor(
    private _route: ActivatedRoute,
    private _videoService: VideoService
  ) { }

  ngOnInit() {
    this._route.paramMap
      .switchMap((params: ParamMap) => this._videoService.getVideo(+params.get('id'))).subscribe(video => this._video = video);
  }

}
