import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ITodo} from '../../../../appConfig';
import {DashboardService} from '../../services/dashboard.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  todo: ITodo;
  todos$: Observable<ITodo[]>;

  constructor(private dashboardService: DashboardService) {

  }

  ngOnInit(): void {
    // this.addTodo();
    this.todos$ = this.getTodoList();
  }

  getTodoList(): Observable<ITodo[]> {
    return this.dashboardService.getTodoList();
  }

  addTodo(): void {
    this.dashboardService.addTodo().subscribe();
  }
}
