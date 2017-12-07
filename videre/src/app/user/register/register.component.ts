import { Observable } from 'rxjs/Rx';
import { AuthenticationService } from '../authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';



function passwordValidator(length: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    return control.value.length < length ? { 'passwordTooShort': { requiredLength: length, actualLength: control.value.length } } : null;
  };
}

function comparePasswords(control: AbstractControl): { [key: string]: any } {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return password.value === confirmPassword.value ? null : { 'passwordsDiffer': true };
}



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public _user: FormGroup;

  
  get passwordControl(): FormControl {
    return <FormControl>this._user.get('passwordGroup').get('password');
  }

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router, 
    private fb: FormBuilder) {}

   /**
    * validate on the serverside with custom validator: serversidevalidateusername
    * custom validator: passwordvalid checks if pw length > 12
    * then compare the pw's wether or not they're identical
    */
  ngOnInit() {
    this._user = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)], this.serverSideValidateUsername()],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, passwordValidator(12)]],
        confirmPassword: ['', Validators.required]
      }, { validator: comparePasswords })
    });
  }

  /**
   * check the username availability in the db (ergo has to go through the backend)
   */
  serverSideValidateUsername(): ValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any }> => {
      return this.authenticationService.checkUserNameAvailability(control.value).map(available => {
        if (available) {
          return null;
        }
        return { userAlreadyExists: true };
      })
    };
  }

  /**
   * post to the /register in the server, if successful: navigate to /home
   */
  onSubmit() {
    this.authenticationService.register(this._user.value.username, this.passwordControl.value).subscribe(val => {
      if (val) {
        this.router.navigate(['/home']);
      }
    });
  }
}
