import { Component, OnInit } from '@angular/core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faInstagram);
library.add(faGithub);
library.add(faLinkedin);

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  private faChevronUp = faChevronUp;
  private faInstagram = faInstagram;
  private faGithub = faGithub;
  private faLinkedin = faLinkedin;

  ngOnInit() {
  }

}
