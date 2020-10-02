import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {API_KEY, IAuthResponse, URLS_SERVERS} from '../appConfig';
import {BehaviorSubject, Observable} from 'rxjs';
import {TokenService} from './token.service';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  role: string;

  constructor(private httpService: HttpService,
              private tokenService: TokenService) {
    this.isLoggedSubject.next(!!this.tokenService.token);
  }

  signUp(email, password): Observable<IAuthResponse> {
    return this.authorizationHandler(URLS_SERVERS.register, email, password);
  }

  login(email, password): Observable<IAuthResponse> {
    return this.authorizationHandler(URLS_SERVERS.login, email, password);
  }

  private authorizationHandler(url: string, email: string, password: string): Observable<IAuthResponse> {
    const body = {
      email,
      password,
      returnSecureToken: true
    };
    return this.httpService.post(`${url}${API_KEY}`, JSON.stringify(body))
      .pipe(
        tap(() => {
          this.isLoggedSubject.next(true);
        }),
        tap(userInfo => {
          this.tokenService.refreshToken = userInfo.refreshToken;
        } )
      );
  }
}
