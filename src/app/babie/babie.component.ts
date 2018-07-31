import { Component, OnInit } from '@angular/core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faInstagram);
library.add(faGithub);
library.add(faLinkedin);

// library.add(faChevronDown);

@Component({
  selector: 'babie',
  templateUrl: './babie.component.html',
  styleUrls: ['./babie.component.scss']
})
export class BabieComponent implements OnInit {

  message: string;
  classNames: string;

  constructor() { }

  ngOnInit() {
    this.message = 'babie misses jackie!';
    this.classNames = 'babie misses jackie';
  }

  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  faInstagram = faInstagram;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
}
