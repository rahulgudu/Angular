import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todoitem',
  imports: [NgClass],
  templateUrl: './todoitem.component.html',
  styleUrl: './todoitem.component.css',
  standalone: true,
})
export class TodoitemComponent {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  constructor() {}
  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log('Delete button clicked');
  }
  onCheckBoxClick(todo: Todo) {
    this.todoCheckbox.emit(todo);
    console.log(todo);
  }
}
