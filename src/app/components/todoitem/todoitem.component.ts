import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todoitem',
  imports: [],
  templateUrl: './todoitem.component.html',
  styleUrl: './todoitem.component.css',
  standalone: true,
})
export class TodoitemComponent {
  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter
  constructor() {}
  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log('Delete button clicked');
  }
}
