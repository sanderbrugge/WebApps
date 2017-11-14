import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Video } from '../model/video.model';
import { Tag } from '../model/tag.model';
import { VideoService } from '../services/video.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  videos: Video[];

  /*
  inject the videoservice in this constructor which calls the singleton instance and creates
  a property
  */
  constructor(private _videoService: VideoService) {}

  //don't do this in the constructor but let angular deal with it after the construction of this class
  //this hooks it onto the lifecycle, use the constructor for simple inits
  ngOnInit() {
    this.getVideos();
  }

  getVideos(): void {
    this._videoService.getVideos().subscribe(videos => this.videos = videos);
  }
}
