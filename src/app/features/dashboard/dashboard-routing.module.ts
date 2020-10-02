import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './containers/dashboard/dashboard.component';
import {AuthenticationGuard} from '../../core/guards/authentication-guard.service';
import {EditorComponent} from './containers/editor/editor.component';
import {NAVIGATION} from '../../appConfig';


const routes: Routes = [
  {
    path: '', component: DashboardComponent, canActivate: [AuthenticationGuard]
  },
  {path: `${NAVIGATION.new}`, component: EditorComponent, canActivate: [AuthenticationGuard]},
  {path: `${NAVIGATION.edit}/:id`, component: EditorComponent, canActivate: [AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
