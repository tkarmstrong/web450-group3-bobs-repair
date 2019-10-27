import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session-layout',
  templateUrl: './session-layout.component.html',
  styleUrls: ['./session-layout.component.css']
})
export class SessionLayoutComponent implements OnInit {

  constructor(private cookie: CookieService, private router: Router) { }

  ngOnInit() {
  }

  userLogout() {
    this.cookie.deleteAll();
    this.router.navigate(['/session/login']);
  }

}
