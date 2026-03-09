import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { TodosComponent } from './components/todos/todos.component';

export const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'about', component: AboutComponent },
];
