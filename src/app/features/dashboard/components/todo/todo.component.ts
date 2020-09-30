import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITodo} from '../../../../appConfig';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  @Input() todo: ITodo;
  @Output() editing: EventEmitter<string> = new EventEmitter<string>();
  @Output() deleting: EventEmitter<string> = new EventEmitter<string>();


  getHost(link: string): string {
    const object = new URL(link);
    return object.hostname;
  }

  edit(): void {
    this.editing.emit(this.todo.id);
  }

  ngOnInit(): void {
  }

  delete() {
    this.deleting.emit(this.todo.id);
  }
}
