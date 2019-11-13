/*
; =======================================================
; Title:  error.interceptor.ts (Week 7)
; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson
; Date:   02 Nov 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/


import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService, private router: Router) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err => {

      if ([404].indexOf(err.status) !== -1) {
        this.router.navigate(['/session/404']);
      }

      if ([500].indexOf(err.status) !== -1) {
        this.router.navigate(['/server-error']);
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
