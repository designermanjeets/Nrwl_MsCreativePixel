import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Links } from './../model/navbar.model';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, tap, shareReplay }  from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})

export class Msv7navbarService implements OnInit {

  //links: Links[];
  private subject = new BehaviorSubject<Links>([]);
  links$: Observable<Links> = this.subject.asObservable();

  URL = 'http://localhost:4000/msv7knw';

  constructor(
    private http: HttpClient
  ) {
    //this.getNavlinks();
   }

   ngOnInit(): void {
     //
   }

   addNavlinks(links) {

      const body = JSON.stringify(links);
      const httpOptions = { headers: new HttpHeaders(
          { 'Content-Type': 'application/json', 
            'Access-Control-Allow-Headers': 'Origin',
            'Access-Control-Allow-Origin': '*'
          }) 
      };
      const httpAdd$: Observable<any> = this.http.post<Links>(`${this.URL}/add`, body, httpOptions) // Blueprint of Observable

      return httpAdd$
        .pipe(
            tap((res : Links) => { // For Debug
              console.log(res);
              console.log('HTTP Add/Post Request Original');
            }), // Tap for Updating anything or for Side effects
        ).subscribe((res) => {
          if(res['data']) {
            console.log('data Saved and make get Call');
            this.subject.next(res['data']);
          }
        });
    }

/*     getNavlinks() {
      
       const httpGet$: Observable<any> = this.http.get(`${this.URL}/navlinks`) // Blueprint of Observable
 
       return httpGet$
         .pipe(
             tap((res) => { // For Debug
                 console.log('HTTP Get Request Original');
             }), // Tap for Updating anything or for Side effects
             map(res => res[0].links),
             shareReplay() // To Prevent multiple HTTP Calls and to share with other Observables || already Sharing
         ).subscribe(
           navlinks => this.subject.next(navlinks)
         );
     } */

}
