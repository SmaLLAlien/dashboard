import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {ITodo, URLS} from '../../../appConfig';
import {HttpService} from '../../../core/http.service';

@Injectable()
export class DashboardService {
  private prefix = 'todo.json';
  private todo: ITodo =  {
    header: 'header2',
    description: 'description description description description description descriptio ndescription description description description description description description descriptio ndescription description description description description description description descriptio ndescription description description description description description description descriptio ndescription description description description description description description descriptio ndescription description description description description description description descriptio ndescription ription '
  };
  private todos: ITodo[] = [{...this.todo}, {...this.todo},{...this.todo},{...this.todo},{...this.todo},{...this.todo},{...this.todo},{...this.todo},{...this.todo}];

  constructor(private httpService: HttpService) { }

  getTodoList(): Observable<ITodo[]> {
    return of(this.todos);
  }

  addTodo() {
    const url = URLS.todo + this.prefix;
    const body = JSON.stringify(this.todo);
    return this.httpService.post(url, body);
  }
}
