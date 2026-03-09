import { Component, signal } from "@angular/core"

import { Dashboard } from "./pages/dashboard/dashboard";
import { LayoutComponent } from "./layout/layout";

@Component({
  selector: 'app-root',
  imports: [ LayoutComponent, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('dashboard-ui');
}
