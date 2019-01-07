import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'msv7banner-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
 

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(form.value);
  }

}
