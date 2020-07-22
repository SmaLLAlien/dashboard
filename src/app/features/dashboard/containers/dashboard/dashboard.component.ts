import { Component, OnInit } from '@angular/core';
import {ITodo} from '../../../../appConfig';
import {DashboardService} from '../../services/dashboard.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  todo: ITodo;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
  }

  getTodoList(): Observable<ITodo[]> {
    return this.dashboardService.getTodoList();
  }
}
