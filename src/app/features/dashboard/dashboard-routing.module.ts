import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './containers/dashboard/dashboard.component';
import {AuthenticationGuard} from '../../core/guards/authentication-guard.service';


const routes: Routes = [
  {
    path: '', component: DashboardComponent, canActivate: [AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
