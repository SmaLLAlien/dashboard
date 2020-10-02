import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NAVIGATION } from '../../appConfig';
import { LoginService } from '../../core/login.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  login: string = NAVIGATION.login;
  dashboard: string = NAVIGATION.dashboard;
  add: string = `${NAVIGATION.dashboard}/${NAVIGATION.new}`;
  isLogged$: Subject<boolean>;

  constructor(private loginService: LoginService) {
    this.isLogged$ = this.loginService.isLoggedSubject;
  }
}
