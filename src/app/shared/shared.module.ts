import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginButtonComponent } from './ui-kit/login-button/login-button.component';
import { ButtonComponent } from './ui-kit/button/button.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';



@NgModule({
  declarations: [
    LoginButtonComponent,
    ButtonComponent,
    NotFoundComponent,
    ErrorMessageComponent,
    ScrollToTopComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginButtonComponent,
    ButtonComponent,
    NotFoundComponent,
    ErrorMessageComponent,
    ScrollToTopComponent
  ]
})
export class SharedModule { }
