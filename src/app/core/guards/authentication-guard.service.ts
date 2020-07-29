import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from '../login.service';
import {NAVIGATION} from '../../appConfig';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private loginService: LoginService,
              private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ): Observable<boolean> | boolean {
    const isLogged = this.loginService.isLoggedSubject.getValue();

    if (isLogged) {
      return true;
    }

    this.router.navigate([`${NAVIGATION.login}`]);
    return false;
  }

}
