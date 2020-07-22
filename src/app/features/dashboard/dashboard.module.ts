import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { TodoComponent } from './components/todo/todo.component';
import {DashboardRoutingModule} from './dashboard-routing.module';



@NgModule({
  declarations: [DashboardComponent, TodoComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
