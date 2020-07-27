import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private spinnerSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  spinnerListener = this.spinnerSubject.asObservable();

  constructor() {
  }

  show() {
    this.spinnerSubject.next(true);
  }

  hide() {
    this.spinnerSubject.next(false);
  }
}