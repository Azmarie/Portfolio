import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // private message: string = 'babie misses jackie!';
  // private classNames: string = 'babie misses jackie';
  private faChevronDown = faChevronDown;
  private fragment: string;

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }
  
  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }
}