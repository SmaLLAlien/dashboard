import {AfterViewChecked, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, AfterViewChecked {
  @ViewChild('input') input: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  login(isClicked: boolean): void {

  }

  registration(isClicked: boolean): void {

  }


  ngAfterViewChecked(): void {
    // this.input.nativeElement.autocomplete = 'll'
  }
}
