import { catchError, map } from 'rxjs/operators';
import { from, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class RoleGuard implements CanActivate {

  user: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private cookieService: CookieService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.getRole().pipe(map(res => {
      console.log(res);
      this.user = res;
      if (this.user.role === 'admin') {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    }));
  }

  getRole() {
    return this.http.get('/api/users/' + this.cookieService.get('username') + '/role');
  }
}
