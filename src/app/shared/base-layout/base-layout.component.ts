/*
; =======================================================
; Title: base-layout.component.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
  validated: boolean;

  constructor(private router: Router, private cookie: CookieService) { }

  ngOnInit() {
    this.validated = this.cookie.check('isAuthenticated');
  }

  userLogout() {
    this.cookie.deleteAll();
    this.router.navigate(['/login']);
  }

}
