import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NAVIGATION} from '../../appConfig';
import {LoginService} from '../../core/login.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  login = NAVIGATION.login;
  dashboard = NAVIGATION.dashboard;
  isLogged$: Subject<boolean>;

  constructor(private loginService: LoginService) {
    this.isLogged$ = this.loginService.isLoggedSubject;
  }

  ngOnInit(): void {}

}
