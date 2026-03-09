import { Component } from '@angular/core';
import { SidebarComponent } from "./sidebar/sidebar";
import { HeaderComponent } from "./header/header";
import { RouterOutlet } from "@angular/router";
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  imports: [SidebarComponent, HeaderComponent, RouterOutlet, NgClass]
})
export class LayoutComponent {

  sidebarCollapsed = false;
  headerTitle = 'Dashboard';

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

}