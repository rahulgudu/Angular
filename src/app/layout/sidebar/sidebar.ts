import { Component, Input } from '@angular/core';
import { NgForOf, NgClass } from "@angular/common";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  imports: [NgForOf, NgClass]
})
export class SidebarComponent {
  @Input() collapsed = false;

  dashboards = [
    { name: 'Marketing', icon: 'pi pi-gauge', active: true },
    { name: 'E-Commerce', icon: 'pi pi-shopping-cart' },
    { name: 'Banking', icon: 'pi pi-building-columns' }
  ];

  apps = [
    { name: 'CMS', icon: 'pi pi-folder' },
    { name: 'Chat', icon: 'pi pi-comments' },
    { name: 'Files', icon: 'pi pi-file' },
    { name: 'Mail', icon: 'pi pi-envelope' },
    { name: 'Task List', icon: 'pi pi-check-square' }
  ];

  uiKit = [
    { name: 'Form Layout', icon: 'pi pi-id-card' },
    { name: 'Input', icon: 'pi pi-pencil' },
    { name: 'Button', icon: 'pi pi-circle' },
    { name: 'Table', icon: 'pi pi-table' },
    { name: 'List', icon: 'pi pi-list' },
    { name: 'Tree', icon: 'pi pi-sitemap' },
    { name: 'Panel', icon: 'pi pi-clone' },
    { name: 'Overlay', icon: 'pi pi-window-maximize' }
  ];
}