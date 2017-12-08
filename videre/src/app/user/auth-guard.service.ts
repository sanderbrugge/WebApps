import {AuthenticationService} from './authentication.service';
import { Injectable } from '@angular/core';

import {Router, RouterStateSnapshot,  ActivatedRouteSnapshot,   CanActivate} from '@angular/router';

/**
 * a guard service which checks if a user is logged in and if not redirects them to login
 * retain the url from which we got directed to redirect to it again after login!
 */
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private _auth: AuthenticationService, 
    private _router: Router
  ) { }
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (this._auth.user$.getValue()) {
        return true;
      }
  
      this._auth.redirectUrl = state.url;
      this._router.navigate(['/login']);
      return false;
    }
}
