import {Component, Input, OnInit} from '@angular/core';
import {ITodo} from '../../../../appConfig';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo: ITodo;

  constructor() { }

  ngOnInit(): void {
  }

}
