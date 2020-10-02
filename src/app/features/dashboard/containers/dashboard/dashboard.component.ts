import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ITodo, NAVIGATION, ROLES} from '../../../../appConfig';
import {DashboardService} from '../../services/dashboard.service';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {LoginService} from '../../../../core/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  todo: ITodo;
  todos$: Observable<ITodo[]>;
  isAdmin = this.loginService.role === ROLES.admin;

  constructor(private dashboardService: DashboardService,
              private router: Router,
              private loginService: LoginService,
              private route: ActivatedRoute) {

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

  delete(id: string): void {
    if (confirm('Are you sure you want to delete')) {
      this.todos$ = this.dashboardService.deleteTodo(id).pipe(
        switchMap(() => this.getTodoList())
      );
    }
  }
}
