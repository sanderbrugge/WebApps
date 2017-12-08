import {Video} from '../model/video.model';
import {VideoService} from '../services/video.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UploadFormComponent implements OnInit {
  _uploadFormGroup: FormGroup;

  constructor(
    private _uploadFormBuilder: FormBuilder, 
    private _videoService: VideoService,
    private _router: Router
  ){}

  ngOnInit() {
    this._uploadFormGroup = this._uploadFormBuilder.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
      description: ['', Validators.maxLength(100)],
      youtube_embed: ['', Validators.required],
      tags: this._uploadFormBuilder.array([ this.addTag() ])
    });
  }

  /**
   * custom build form array
   */
  addTag(): FormGroup {
    return this._uploadFormBuilder.group({ tag: ['', [Validators.minLength(3), Validators.maxLength(10)]] });
  }

  /**
   * retrieve the values from the form, and post them to the server via the service
   */
  upload() {
    if(this._uploadFormGroup.valid) {
        let video = new Video(
          1,
          0,
          this._uploadFormGroup.value.title,
          0,
          this._uploadFormGroup.value.description,
          "../assets/images/thumbnail.png",
          this._uploadFormGroup.value.youtube_embed,
          this._uploadFormGroup.value.tag, 
          null
        )
        
        this._videoService.uploadVideo(video).subscribe(video => this._router.navigate(['/home']));
    } else {
      console.log("invalid form");
    }
  }
}
