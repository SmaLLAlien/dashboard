import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IServerResponse, ITodo, URLS_SERVERS} from '../../../appConfig';
import {HttpService} from '../../../core/http.service';
import {map} from 'rxjs/operators';

@Injectable()
export class DashboardService {
  private prefix = 'todo.json';

  constructor(private httpService: HttpService) { }

  getTodoList(): Observable<ITodo[]> {
    const url = URLS_SERVERS.todo + this.prefix;
    return this.httpService.get(url).pipe(
      map((response: IServerResponse) => {
        const keys = Object.keys(response);
        return keys.map(key => Object.assign({}, response[key], {id: key}));
      })
    );
  }

  deleteTodo(id: string) {
    const url = `https://dashboard-70225.firebaseio.com/todo/${id}.json`;
    return this.httpService.delete(url);
  }
}
