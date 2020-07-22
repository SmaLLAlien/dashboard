import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {
  @Input() text: string;
  @Input() isDisabled = false;
  @Input() customClass = '';
  @Output() clickHandler: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.clickHandler.emit(true);
  }
}
