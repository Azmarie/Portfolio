import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // <-- do not forget to import
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router ) {
  }

  @Output() navigateMeow: EventEmitter<string> = new EventEmitter<string>();

  onClick(state) {
    this.navigateMeow.emit(state);
  }

  onAnchorClick ( ) {
      this.route.fragment.subscribe ( f => {
        const element = document.querySelector ( '#' + f );
        if (element) {
          element.scrollIntoView();
        }
      });
  }

  ngOnInit() {
    this.router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = this.router.parseUrl(this.router.url);
        if (tree.fragment) {
          const element = document.querySelector('#' + tree.fragment);
          if (element) { element.scrollIntoView(); }
        }
      }
    });
  }

}