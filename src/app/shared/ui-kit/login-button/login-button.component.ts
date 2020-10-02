import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginButtonComponent {
  @Input() text: string;
  @Input() isDisabled: boolean = false;
  @Input() customClass: string = '';
  @Output() clickHandler: EventEmitter<boolean> = new EventEmitter<boolean>();

  onClick(): void {
    this.clickHandler.emit(true);
  }
}
