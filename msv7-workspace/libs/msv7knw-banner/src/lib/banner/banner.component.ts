import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { map, debounceTime, distinctUntilChanged, delayWhen, retryWhen, switchMap, startWith } from 'rxjs/Operators';
import { fromEvent, timer, Observable, of } from 'rxjs';

@Component({
  selector: 'msv7banner-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, AfterViewInit {

  @ViewChild('searchInput') searchInput : ElementRef
 

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    fromEvent<KeyboardEvent>(this.searchInput.nativeElement, 'keyup')
      .pipe(
        // map(event => event.target.value), // Not Good
        debounceTime(400), // Wait for the period of Silence for 400 ml || Delay
        startWith(''),
        distinctUntilChanged(),
        switchMap((search: KeyboardEvent) => {
          const inputVal = (<HTMLInputElement>this.searchInput.nativeElement).value;
          return of(this.searchTerm(inputVal))
        }),
        retryWhen(errors => errors.pipe(delayWhen(() => timer(2000))) ) // Retry after 2 sec and subscribe again HTTP stream
      )
      .subscribe();
    
  }

  searchTerm(term: string) {
    console.log(term);
  }

  onSubmit(form){
    console.log(form.value);
  }

}
