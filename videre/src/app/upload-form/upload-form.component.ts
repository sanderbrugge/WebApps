import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UploadFormComponent implements OnInit {
  _uploadFormGroup: FormGroup;

  constructor(private _uploadFormBuilder: FormBuilder) { }

  ngOnInit() {
    this._uploadFormGroup = this._uploadFormBuilder.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
      discription: ['', Validators.maxLength(100)],
      youtube_embed: ['', Validators.required],
      tags: this._uploadFormBuilder.array([ this.addTag() ])
    });
  }

  addTag(): FormGroup {
    return this._uploadFormBuilder.group({ name: ['', [Validators.minLength(3), Validators.maxLength(10)]] });
  }

  upload() {
    console.log("uploading");
  }
}
