import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../user/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  _loginFormgroup: FormGroup;
  private _error: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this._loginFormgroup = this._formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  /**
   * log in through the form, post the username and password, redirect to home
   */
  login() {
    console.log("logging in");
    this._authService.login(this._loginFormgroup.value.username, this._loginFormgroup.value.password).subscribe(val => {
      if (val) {
        console.log(val);
          this.router.navigate(['/home']);
      }
    }, err => this._error = err.json().message);
    console.log("error: " + this._error);
  }
}
