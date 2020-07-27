import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {VALIDATE_CONFIG} from '../../../appConfig';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  @ViewChild('input') input: ElementRef;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(VALIDATE_CONFIG.loginNameLength)]],
      password: ['', [Validators.required, Validators.pattern(VALIDATE_CONFIG.password)]]
    });
  }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }
  }

  registration(): void {
    if (this.loginForm.invalid) {
      return;
    }
  }

  get name() {
    return this.loginForm.get('name') as FormControl;
  }

  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  get isFormHasValue(): void {
    return this.name.value || this.password.value;
  }

  clear(): void {
    this.loginForm.reset();
  }
}
