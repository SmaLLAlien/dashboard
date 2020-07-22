import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router';
import { LoginButtonComponent } from './ui-kit/login-button/login-button.component';
import { ButtonComponent } from './ui-kit/button/button.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LoginButtonComponent,
    ButtonComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    LoginButtonComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
