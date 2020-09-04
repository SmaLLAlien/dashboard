import { Injectable } from '@angular/core';
import {ITodo} from '../../../appConfig';
import {HttpService} from '../../../core/http.service';
import {Observable} from 'rxjs';

@Injectable()
export class EditorService {

  constructor(private http: HttpService) { }

  getTodo(id): Observable<ITodo> {
    return this.http.get(`https://dashboard-70225.firebaseio.com/todo/${id}.json`);
  }

  save(todo: ITodo, id: string): Observable<ITodo> {
    const body = JSON.stringify(todo);
    return this.http.put(`https://dashboard-70225.firebaseio.com/todo/${id}.json`, body);
  }
}
