import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NAVIGATION, VALIDATE_CONFIG } from '../../../appConfig';
import { LoginService } from '../../../core/login.service';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  @ViewChild('input') input: ElementRef;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(VALIDATE_CONFIG.loginNameLength), Validators.email]],
      password: ['', [Validators.required, Validators.pattern(VALIDATE_CONFIG.password)]]
    });
  }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }
    const email = this.email.value.trim();
    const password = this.password.value.trim();

    this.loginService.login(email, password).pipe(
      catchError(err => this.handleError(err))
    ).subscribe(() => this.onAuthResponse());
  }

  registration(): void {
    if (this.loginForm.invalid) {
      return;
    }
    const email = this.email.value.trim();
    const password = this.password.value.trim();

    this.loginService.signUp(email, password).pipe(
      catchError(err => this.handleError(err))
    ).subscribe(() => this.onAuthResponse());
  }

  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  get isFormHasValue(): void {
    return this.email.value || this.password.value;
  }

  clear(): void {
    this.loginForm.reset();
  }

  private handleError(error: HttpErrorResponse): Observable<HttpErrorResponse> {
    this.loginForm.reset();

    return of(error);
  }

  private onAuthResponse(): void {
    this.loginForm.reset();
    this.router.navigate([NAVIGATION.dashboard]);
  }
}
