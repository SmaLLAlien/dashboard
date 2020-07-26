import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {SpinnerService} from '../spinner.service';
import {finalize} from 'rxjs/operators';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {
  count = 0;

  constructor(private spinnerService: SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.count++;
    this.spinnerService.show();
    return next.handle(request).pipe(
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
