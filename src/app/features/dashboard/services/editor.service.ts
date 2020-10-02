import { Injectable } from '@angular/core';
import { ITodo } from '../../../appConfig';
import { HttpService } from '../../../core/http.service';
import { Observable } from 'rxjs';

@Injectable()
export class EditorService {

  constructor(private http: HttpService) { }

  getTodo(id: string): Observable<ITodo> {
    return this.http.get(`https://dashboard-70225.firebaseio.com/todo/${id}.json`);
  }

  edit(todo: ITodo, id: string): Observable<ITodo> {
    const body = JSON.stringify(todo);
    return this.http.put(`https://dashboard-70225.firebaseio.com/todo/${id}.json`, body);
  }

  save(todo: ITodo): Observable<ITodo> {
    const body = JSON.stringify(todo);
    return this.http.post(`https://dashboard-70225.firebaseio.com/todo.json`, body);
  }
}
