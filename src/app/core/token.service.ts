import { Injectable } from '@angular/core';
import {LOGIN_TIME, TOKEN, TOKEN_EXPIRATION} from '../appConfig';

@Injectable()
export class TokenService {

  constructor() { }

  get token() {
    return localStorage.getItem(TOKEN) || '';
  }

  set token(token: string) {
    this.setLoginTime();
    localStorage.setItem(TOKEN, JSON.stringify(token));
  }

  private getLoginTime() {
    return +localStorage.getItem(LOGIN_TIME);
  }

  private setLoginTime() {
    localStorage.setItem(LOGIN_TIME, Date.now().toString());
  }

  isExpired() {
    const time = this.getLoginTime();
    if (time) {
      return Date.now() - time >= TOKEN_EXPIRATION;
    }

    return false;
  }
}
