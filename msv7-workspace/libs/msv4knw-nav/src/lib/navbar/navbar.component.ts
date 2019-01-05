import { Component, OnInit } from '@angular/core';

import { Links } from './../model/navbar.model';

@Component({
  selector: 'msv7-workspace-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  links: Links;

  constructor() { }

  ngOnInit() {

    this.links = [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Forum', href: '/forum' },
      { label: 'Login', href: '/login' },
      { label: 'Contact Us', href: '/contactus' },
    ]

    console.log(this.links)

  }

}
