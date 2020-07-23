import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {IServerResponse, ITodo, URLS} from '../../../appConfig';
import {HttpService} from '../../../core/http.service';
import {map} from 'rxjs/operators';

@Injectable()
export class DashboardService {
  private prefix = 'todo.json';
  private todo: ITodo =  {
    header: '',
    description: 'description description description description description descriptio ndescription description description description description description description descriptio ndescription description description description description description description descriptio ndescription description description description description description description descriptio ndescription description description',
    link: 'https://metanit.com/web/angular2/8.4.php'
  };
  private todos: ITodo[] = [{...this.todo}, {...this.todo},{...this.todo},{...this.todo},{...this.todo},{...this.todo},{...this.todo},{...this.todo},{...this.todo}];

  constructor(private httpService: HttpService) { }

  getTodoList(): Observable<ITodo[]> {
    const url = URLS.todo + this.prefix;
    return this.httpService.get(url).pipe(
      map((response: IServerResponse) => {
        const keys = Object.keys(response);
        return keys.map(key => response[key]);
      })
    );
    // return of(this.todos)
  }

  addTodo(): Observable<{ name: string }> {
    const url = URLS.todo + this.prefix;
    const body = JSON.stringify(this.todo);
    return this.httpService.post(url, body);
  }
}
