import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  private _loginFormgroup: FormGroup;
  
  constructor() { }

  ngOnInit() {
    this._loginFormgroup = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  login() {
    console.log("logging in");
  }
}
