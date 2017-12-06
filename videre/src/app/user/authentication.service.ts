import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Http } from '@angular/http';

@Injectable()
export class AuthenticationService {
  private _url = '/API/users';
  private _user$: BehaviorSubject<string>;
  
  constructor(private http: Http) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this._user$ = new BehaviorSubject<string>(
      currentUser && currentUser.username);
  }

  /*get user$(): BehaviorSubject {
    return this._user$;
  }*/
}
