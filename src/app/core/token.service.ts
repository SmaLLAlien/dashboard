import { Injectable } from '@angular/core';
import {API_KEY, LOGIN_TIME, REFRESH_TOKEN, TOKEN, TOKEN_EXPIRATION} from '../appConfig';
import {HttpService} from './http.service';
import {tap} from 'rxjs/operators';

@Injectable()
export class TokenService {

  constructor(private httpService: HttpService) { }

  get token() {
    return localStorage.getItem(TOKEN) || '';
  }

  set token(token: string) {
    this.setLoginTime();
    localStorage.setItem(TOKEN, JSON.stringify(token));
  }

  get refreshToken() {
    return localStorage.getItem(REFRESH_TOKEN) || '';
  }

  set refreshToken(token: string) {
    localStorage.setItem(REFRESH_TOKEN, JSON.stringify(token));
  }

  get tokenExpired() {
    if (!this.getLoginTime) {
      return false;
    }
    console.log(-this.getLoginTime() + Date.now(), 'timedif');
    return (-this.getLoginTime() + Date.now()) >= TOKEN_EXPIRATION;
  }

  private getLoginTime() {
    return +localStorage.getItem(LOGIN_TIME);
  }

  private setLoginTime() {
    localStorage.setItem(LOGIN_TIME, Date.now().toString());
  }

  updateToken() {
    const refreshToken = JSON.parse(this.refreshToken);
    const body = JSON.stringify({grant_type: 'refresh_token', refresh_token: refreshToken});
    return this.httpService.post(`https://securetoken.googleapis.com/v1/token?key=${API_KEY}`, body).pipe(
      tap(() => this.setLoginTime())
    );
  }

  isExpired() {
    const time = this.getLoginTime();
    if (time) {
      return Date.now() - time >= TOKEN_EXPIRATION;
    }

    return false;
  }
}
