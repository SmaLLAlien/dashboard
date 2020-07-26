import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {SpinnerService} from './core/spinner.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'dashboard';
  isLoading$: Observable<boolean>;

  constructor(private spinnerService: SpinnerService) {
  }

  ngOnInit(): void {
    this.isLoading$ = this.spinnerService.spinnerListener;
  }


}
