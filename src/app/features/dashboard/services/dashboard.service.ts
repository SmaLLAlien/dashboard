import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IServerResponse, ITodo, URLS_SERVERS} from '../../../appConfig';
import {HttpService} from '../../../core/http.service';
import {map} from 'rxjs/operators';

@Injectable()
export class DashboardService {
  private prefix = 'todo.json';
  // private todo: ITodo =  {
  //   id: null,
  //   header: '',
  //   description: 'description description description description description descriptio ndescription description description description description description description descriptio ndescription description description description description description description descriptio ndescription description description description description description description descriptio ndescription description description',
  //   links: ['https://metanit.com/web/angular2/8.4.php', 'https://metanit.com/web/angular2/8.4.php']
  // };
  // private todos: ITodo[] = [{...this.todo}, {...this.todo},{...this.todo},{...this.todo},{...this.todo},{...this.todo},{...this.todo},{...this.todo},{...this.todo}];

  constructor(private httpService: HttpService) { }

  getTodoList(): Observable<ITodo[]> {
    const url = URLS_SERVERS.todo + this.prefix;
    return this.httpService.get(url).pipe(
      map((response: IServerResponse) => {
        const keys = Object.keys(response);
        return keys.map(key => Object.assign({}, response[key], {id: key}));
      })
    );
    // return of(this.todos)
  }

  // addTodo(): Observable<{ name: string }> {
  //   const url = URLS_SERVERS.todo + this.prefix;
  //   const body = JSON.stringify(this.todo);
  //   return this.httpService.post(url, body);
  // }
}
