import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{

  constructor() { }

  @Output() navigateMeow: EventEmitter<string> = new EventEmitter<string>();

  onClick(state) {
    this.navigateMeow.emit(state);
  }

}
