import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { TodoComponent } from './components/todo/todo.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardService} from './services/dashboard.service';
import {CommonModule} from '@angular/common';
import { EditorComponent } from './containers/editor/editor.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EditorService} from './services/editor.service';



@NgModule({
  declarations: [DashboardComponent, TodoComponent, EditorComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    DashboardService,
    EditorService
  ]
})
export class DashboardModule { }
