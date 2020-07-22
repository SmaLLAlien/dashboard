import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { TodoComponent } from './components/todo/todo.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardService} from './services/dashboard.service';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [DashboardComponent, TodoComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule,
    CommonModule,
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
