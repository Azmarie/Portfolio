import { Component, OnInit } from '@angular/core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faInstagram);
library.add(faGithub);
library.add(faLinkedin);

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private message: string = 'babie misses jackie!';
  private classNames: string = 'babie misses jackie';

  private faChevronDown = faChevronDown;
  private faChevronUp = faChevronUp;
  private faInstagram = faInstagram;
  private faGithub = faGithub;
  private faLinkedin = faLinkedin;

  constructor() {}

  ngOnInit() {}
}

