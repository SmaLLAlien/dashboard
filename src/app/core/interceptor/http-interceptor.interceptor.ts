import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse, HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { SpinnerService } from '../spinner.service';
import { catchError, finalize, tap } from 'rxjs/operators';
import { URLS_SERVERS } from '../../appConfig';
import { TokenService } from '../token.service';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {
  count: number = 0;
  private inProgress: boolean = false;
  constructor(private spinnerService: SpinnerService,
              private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let headers;
    this.count++;
    this.spinnerService.show();

    switch (request.url) {
      case URLS_SERVERS.login:
      case URLS_SERVERS.register:
        headers = {
          'Content-Type': 'application/json',
        };
        break;
      default:
        headers = {
          'Content-Type': 'application/json',
          Authorization: `${this.tokenService.token}`,
        };
    }

    const modifiedReq = request.clone({
      setHeaders: headers,
    });

    if (this.tokenService.tokenExpired && !this.inProgress) {
      this.updateToken();
    }

    return next.handle(modifiedReq).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.body && event.body.idToken) {
            this.tokenService.token = event.body.idToken;
          }

          if (event.body && event.body.refreshToken) {
            this.tokenService.refreshToken = event.body.refreshToken;
          }
          return event;
        }
      }),
      catchError((err: HttpErrorResponse) => {
        const {error} = err;
        if (error.error && error.error.message === 'INVALID_ID_TOKEN') {

          // TODO check error
          console.log(error);
        }
        return throwError(err);
      } ),
      finalize(() => {
        this.count--;
        if (!this.count) {
          setTimeout(() => {
            this.spinnerService.hide();
          }, 500);
        }
      })
    );
  }

  updateToken(): void {
    this.inProgress = true;
    if (this.tokenService.refreshToken) {
      this.tokenService.updateToken().subscribe((response) => {
        this.tokenService.token = response.id_token;
        this.tokenService.refreshToken = response.refresh_token;

        this.inProgress = false;
      });
    }
  }
}

