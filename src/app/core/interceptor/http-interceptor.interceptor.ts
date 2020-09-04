import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse, HttpResponse, HttpParams
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {SpinnerService} from '../spinner.service';
import {catchError, finalize, tap} from 'rxjs/operators';
import {URLS_SERVERS} from '../../appConfig';
import {TokenService} from '../token.service';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {
  count = 0;

  constructor(private spinnerService: SpinnerService,
              private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let headers;
    let params;
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
      // params: new HttpParams().set(
      //   'auth', this.tokenService.token
      // )
    });


    return next.handle(modifiedReq).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.body && event.body.idToken) {
            this.tokenService.token = event.body.idToken;

            return event;
          }
        }
      }),
      catchError((err: HttpErrorResponse) => {
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
}

