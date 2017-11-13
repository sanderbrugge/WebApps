import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Video } from '../model/video.model';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VideoCardComponent implements OnInit {
  @Input() videos: Video[];

  constructor(private _videoService: VideoService) {}

  ngOnInit() {
  }
}
