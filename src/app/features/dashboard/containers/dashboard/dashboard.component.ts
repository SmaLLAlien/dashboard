import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ITodo, NAVIGATION} from '../../../../appConfig';
import {DashboardService} from '../../services/dashboard.service';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  todo: ITodo;
  todos$: Observable<ITodo[]>;

  constructor(private dashboardService: DashboardService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    // this.addTodo();
    this.todos$ = this.getTodoList();
  }

  getTodoList(): Observable<ITodo[]> {
    return this.dashboardService.getTodoList();
  }

  addTodo(): void {
    // this.dashboardService.addTodo().subscribe();
  }

  openEdit(id: string): void {
    this.router.navigate([`${NAVIGATION.edit}/${id}`], {relativeTo: this.route});
  }
}
