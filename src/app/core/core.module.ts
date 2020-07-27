import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HttpService} from './http.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpInterceptorInterceptor} from './interceptor/http-interceptor.interceptor';
import {SpinnerService} from './spinner.service';

export abstract class EnsureImportedOnceModule {
  protected constructor(targetModule: any) {
    if (targetModule) {
      throw new Error(`${targetModule.constructor.name} has already been loaded.`);
    }
  }
}


@NgModule({
  declarations: [],
  imports: [],
  providers: [
    HttpService,
    SpinnerService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorInterceptor, multi: true}
  ]
})
export class CoreModule extends EnsureImportedOnceModule {
  public constructor(@SkipSelf() @Optional() parent: CoreModule) {
    super(parent);
  }
}

