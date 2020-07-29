import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {ERROR_MESSAGES, ErrorMessages} from '../../appConfig';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  @Input() control: AbstractControl;
  @Input() controlName: string = '';
  errorMessage: ErrorMessages = ERROR_MESSAGES;
  keys: string[] = Object.keys(this.errorMessage);

  constructor() { }

  ngOnInit(): void {
    console.log(this.control);
    console.log(this.controlName);
  }

}
