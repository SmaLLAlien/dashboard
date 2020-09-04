import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() isDisable: boolean = false;
  @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();


  onClick(): void {
    this.clicked.emit(true);
  }
}
