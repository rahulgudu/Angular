import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoitemComponent } from '../todoitem/todoitem.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  imports: [CommonModule, TodoitemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  standalone: true,
})
export class TodosComponent {
  todos: Todo[] = [];
  constructor() {
    this.todos = [
      {
        sno: 3,
        title: 'Go to the gym',
        desc: 'Go to the gym at 6:00 PM',
        active: true,
      },
      {
        sno: 4,
        title: 'Go to the market',
        desc: 'Go to the market at 7:00 PM',
        active: true,
      },
      {
        sno: 5,
        title: 'Go to the mall',
        desc: 'Go to the mall at 8:00 PM',
        active: true,
      },
    ];
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    console.log('Todo deleted', todo);
  }
}
