import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [HeaderComponent, SpinnerComponent],
  exports: [HeaderComponent, SpinnerComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PublicModule { }
