import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoginService } from '../login.service';
import { ADMIN, API_KEY, NAVIGATION, ROLES, URLS_SERVERS } from '../../appConfig';
import { TokenService } from '../token.service';
import { HttpService } from '../http.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private loginService: LoginService,
              private tokenService: TokenService,
              private httpService: HttpService,
              private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ): Observable<boolean> | boolean {
    const isLogged = this.loginService.isLoggedSubject.getValue();

    if (isLogged) {
      return this.getRole();
    }

    this.router.navigate([`${NAVIGATION.login}`]);
    return false;
  }

  getRole(): boolean | Observable<boolean> {
    const token = JSON.parse(this.tokenService.token);
    const body = JSON.stringify({idToken: token});
    if (!this.loginService.role) {
      return this.httpService.post(`${URLS_SERVERS.useInfo}${API_KEY}`, body).
      pipe(
        map(data => {
          return this.checkRole(data.users[0].email);
        }),
        catchError(err => {
          this.loginService.isLoggedSubject.next(false);
          this.router.navigate([`${NAVIGATION.login}`]);
          return of(false);
        })
      );
    } else {
      return true;
    }
  }

  checkRole(email: string): boolean {
    if (email.includes(ADMIN)) {
      this.loginService.role = ROLES.admin;
    } else {
      this.loginService.role = ROLES.user;
      return true;
    }
    return true;
  }
}
