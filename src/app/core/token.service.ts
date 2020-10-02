import { Injectable } from '@angular/core';
import { API_KEY, IRefreshTokenResponse, LOGIN_TIME, REFRESH_TOKEN, TOKEN, TOKEN_EXPIRATION } from '../appConfig';
import { HttpService } from './http.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class TokenService {

  constructor(private httpService: HttpService) { }

  get token(): string {
    return localStorage.getItem(TOKEN) || '';
  }

  set token(token: string) {
    this.setLoginTime();
    localStorage.setItem(TOKEN, JSON.stringify(token));
  }

  get refreshToken(): string {
    return localStorage.getItem(REFRESH_TOKEN) || '';
  }

  set refreshToken(token: string) {
    localStorage.setItem(REFRESH_TOKEN, JSON.stringify(token));
  }

  get tokenExpired(): boolean {
    if (!this.getLoginTime) {
      return false;
    }
    return (-this.getLoginTime() + Date.now()) >= TOKEN_EXPIRATION;
  }

  private getLoginTime(): number {
    return +localStorage.getItem(LOGIN_TIME);
  }

  private setLoginTime(): void {
    localStorage.setItem(LOGIN_TIME, Date.now().toString());
  }

  updateToken(): Observable<IRefreshTokenResponse> {
    const refreshToken = JSON.parse(this.refreshToken);
    const body = JSON.stringify({grant_type: 'refresh_token', refresh_token: refreshToken});
    return this.httpService.post(`https://securetoken.googleapis.com/v1/token?key=${API_KEY}`, body).pipe(
      tap(() => this.setLoginTime())
    );
  }
}
