import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router';
import { LoginButtonComponent } from './ui-kit/login-button/login-button.component';
import { ButtonComponent } from './ui-kit/button/button.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LoginButtonComponent,
    ButtonComponent,
    NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    LoginButtonComponent,
    ButtonComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
