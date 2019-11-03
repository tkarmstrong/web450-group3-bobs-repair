/*
; =======================================================
; Title: session-layout.component.ts (Week 6)
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
  selector: 'app-session-layout',
  templateUrl: './session-layout.component.html',
  styleUrls: ['./session-layout.component.css']
})
export class SessionLayoutComponent implements OnInit {
  validated: boolean;

  constructor(private cookie: CookieService, private router: Router) { }

  ngOnInit() {
    this.validated = this.cookie.check('isAuthenticated');
  }

  userLogout() {
    this.cookie.deleteAll();
    this.router.navigate(['/login']);
  }

}
