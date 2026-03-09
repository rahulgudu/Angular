import { Component, signal } from "@angular/core"
import { Layout } from "./layout/layout";
import { Dashboard } from "./pages/dashboard/dashboard";

@Component({
  selector: 'app-root',
  imports: [ Layout, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('dashboard-ui');
}
