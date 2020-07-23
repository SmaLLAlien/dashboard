import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginButtonComponent } from './ui-kit/login-button/login-button.component';
import { ButtonComponent } from './ui-kit/button/button.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';



@NgModule({
  declarations: [
    LoginButtonComponent,
    ButtonComponent,
    NotFoundComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoginButtonComponent,
    ButtonComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
