import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [TodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-list';
}
