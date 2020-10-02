import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class SpinnerService {
  private spinnerSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  spinnerListener: Observable<boolean> = this.spinnerSubject.asObservable();

  show(): void {
    this.spinnerSubject.next(true);
  }

  hide(): void {
    this.spinnerSubject.next(false);
  }
}
