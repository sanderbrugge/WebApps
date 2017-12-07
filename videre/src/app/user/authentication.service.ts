import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  private _url = 'http://localhost:4200/users';
  private _user$: BehaviorSubject<string>;
  
  constructor(private http: Http) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this._user$ = new BehaviorSubject<string>(
      currentUser && currentUser.username);
  }

  get user$(): BehaviorSubject<string> {
    return this._user$;
  }

  /**
   * get the token from the local storage, as seen on the slides
   */
  get token(): string {
    const localCurrentUser = JSON.parse(localStorage.getItem('currentUser'));
    return !!localCurrentUser ? localCurrentUser.token  : '';
  }

  /**
   * 
   * @param username has to be an email, for the sake of validation demo'ing
   * @param password 
   * 
   * when succesfull, we extract the token from the response
   */
  login(username: string, password: string): Observable<boolean> {
    return this.http.post(`${this._url}/API/login`, 
      { username: username, password: password })
      .map(res => res.json()).map(res => {
        const token = res.token;
        if (token) {
          localStorage.setItem('currentUser', 
            JSON.stringify({ username: username, token: token }));
          this._user$.next(username);
          return true;
        } else {
          return false;
        }
      });
  }
  
  /**
   * 
   * @param username 
   * @param password 
   * 
   * simular to the login method, but we post to the register url
   */
  register(username: string, password: string): Observable<boolean> {
    return this.http.post(`${this._url}/API/register`, 
      { username: username, password: password })
      .map(res => res.json()).map(res => {
        const token = res.token;
        if (token) {
          localStorage.setItem('currentUser', 
            JSON.stringify({ username: username, token: res.token }));
          this._user$.next(username);
          return true;
        } else {
          return false;
        }
      });
  }

  /**
   * remove the token from the localstorage, nullify the user
   */
  logout() {
    if (this.user$.getValue()) {
      localStorage.removeItem('currentUser');
      setTimeout(() => this._user$.next(null));
    }
  }

  /**
   * 
   * @param username pass username to see if it already exists or not, has to be unique!
   */
  checkUserNameAvailability(username: string): Observable<boolean> {
    return this.http.post(`${this._url}/API/checkusername`, { username: username }).map(res => res.json())
    .map(item => {
      if (item.username === 'alreadyexists') {
        return false;
      } else {
        return true;
      }
    });
  }
}
