/*
; =======================================================
; Title: not-found.component.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router, private cookie: CookieService) { }

  ngOnInit() {
  }

  goHome() {
    const cookieValue: string = this.cookie.get('isAuthenticated');
    if (cookieValue) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/session/login']);
    }
  }

}
