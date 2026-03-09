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
  localItem: string | null;
  todos: Todo[] = [];
  constructor() {
    this.localItem = localStorage.getItem('todos');
    if (this.localItem === null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    console.log('Todo deleted', todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
