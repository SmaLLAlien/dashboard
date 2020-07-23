import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url: string, options?: any): Observable<any> {
    return this.http.get(url, options);
  }

  post(url: string, body: string, options?: any): Observable<any> {
    return this.http.post(url, body, options);
  }

  put(url: string, body: string, options?: any): Observable<any> {
    return this.http.put(url, body, options);
  }

  patch(url: string, body: string, options?: any): Observable<any> {
    return this.http.patch(url, body, options);
  }

  delete(url: string, options?: any): Observable<any> {
    return this.http.delete(url, options);
  }
}
