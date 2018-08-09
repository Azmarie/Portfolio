import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private message: string = 'babie misses jackie!';
  private classNames: string = 'babie misses jackie';
  private faChevronDown = faChevronDown;

  constructor() {}

  ngOnInit() {}
}

