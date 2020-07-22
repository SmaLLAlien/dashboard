import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {ITodo} from '../../../appConfig';

@Injectable()
export class DashboardService {
  todo: ITodo =  {
    header: 'header2',
    description: 'description'
  };
  todos: ITodo[] = [{...this.todo}, {...this.todo},{...this.todo},{...this.todo},{...this.todo},{...this.todo}];

  constructor() { }

  getTodoList(): Observable<ITodo[]> {
    return of(this.todos);
  }
}
