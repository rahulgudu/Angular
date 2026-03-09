import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html'
})
export class HeaderComponent {

  @Input() title!: string;

  @Output() toggleSidebar = new EventEmitter<void>();

}