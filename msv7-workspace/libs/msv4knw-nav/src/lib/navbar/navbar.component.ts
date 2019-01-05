import { Component, OnInit } from '@angular/core';

import { Msv7navbarService } from './../services/msv7navbar.service';
import { Links } from './../model/navbar.model';
import { startWith, filter, map } from 'rxjs/Operators';

@Component({
  selector: 'msv7-workspace-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  links: Links;

  constructor(
    private navbarService: Msv7navbarService
  ) { }

  ngOnInit() {

    const linksForApi = [
      { label: 'Home', route: 'home', href: 'home' },
      { label: 'About', route: 'about', href: 'about' },
      { label: 'Forum', route: 'forum', href: 'forum' },
      { label: 'Login', route: 'login', href: 'login' },
      { label: 'Contact Us', route: 'contactus', href: 'contactus' },
    ]
  
    if( !this.links ) { this.navbarService.addNavlinks(linksForApi) }
    
    this.navbarService.links$
    .pipe(
      map(courses => this.links = courses),
      filter(courses => !!this.links)
    )
    .subscribe(val => {
      if(Array.isArray(val) && val.length) { this.links = val; console.log(this.links) }
    });

  }

}
