import {Component, Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {ERROR_MESSAGES, IErrorMessages} from '../../appConfig';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent {
  @Input() control: AbstractControl;
  @Input() controlName: string = '';
  errorMessage: IErrorMessages = ERROR_MESSAGES;
  keys: string[] = Object.keys(this.errorMessage);
}
